from django.db.models import Max
from django.shortcuts import render
from .models import LeituraSensor

def home(request):
    # Obtém a leitura mais recente de cada andar
    subquery = Leiturasensor.objects.values('andar').annotate(last_entry=Max('data'))
    leituras_recentes = Leiturasensor.objects.filter(
        data__in=[item['last_entry'] for item in subquery]
    ).order_by('andar', '-hora')

    return render(request, 'seu_template.html', {'leituras': leituras_recentes})
