from django.db import connection
from django.db.models import Max
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import LeituraSensor
from .serializers import LeituraSensorSerializer

@api_view(['GET'])
def obter_leituras(request):
    connection.close()  # Fecha a conexão para garantir que busque dados novos

    subquery = LeituraSensor.objects.values('andar').annotate(last_entry=Max('data'))
    leituras_recentes = LeituraSensor.objects.filter(
        data__in=[item['last_entry'] for item in subquery]
    ).order_by('andar', '-data', '-hora')  # Ordena corretamente

    serializer = LeituraSensorSerializer(leituras_recentes, many=True)
    return Response(serializer.data)
