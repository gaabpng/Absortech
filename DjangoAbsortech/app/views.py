from django.db import connection
from django.db.models import Max
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import LeituraSensor
from .serializers import LeituraSensorSerializer

@api_view(['GET'])
def obter_leituras(request):
    connection.close()  # Fecha a conexão para garantir que busque dados novos

    # Obtém a leitura mais recente (data + hora) de cada andar
    subquery = (
        LeituraSensor.objects.values('andar')
        .annotate(last_entry=Max('data'), last_time=Max('hora'))  # Pega a última data e hora
    )

    # Para cada andar, vamos pegar a combinação mais recente de data e hora
    leituras_recentes = []
    for item in subquery:
        leitura = LeituraSensor.objects.filter(
            andar=item['andar'], 
            data=item['last_entry'], 
            hora=item['last_time']
        ).first()  # Pega a primeira (mais recente) correspondência
        if leitura:
            leituras_recentes.append(leitura)

    # Ordena as leituras por andar
    leituras_recentes = sorted(leituras_recentes, key=lambda x: x.andar)

    # Serializa e retorna a resposta
    serializer = LeituraSensorSerializer(leituras_recentes, many=True)
    return Response(serializer.data)
