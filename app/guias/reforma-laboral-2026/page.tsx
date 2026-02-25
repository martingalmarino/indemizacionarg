import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent } from '@/components/Card';
import { Button } from '@/components/Button';
import { AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Reforma Laboral 2026 Argentina: Cambios en el Cálculo de Indemnización',
  description:
    'Conocé los cambios que introduce la Reforma Laboral 2026 en Argentina y cómo afecta el cálculo de tu indemnización por despido.',
};

export default function ReformaLaboral2026Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <article className="prose prose-lg max-w-none">
        <h1>Reforma Laboral 2026: Qué Cambia en tu Indemnización</h1>

        <p className="text-xl text-gray-600 mb-8">
          La Reforma Laboral 2026 introduce modificaciones significativas en el cálculo
          de las indemnizaciones. Entendé cómo te afecta.
        </p>

        <Card className="my-8 bg-amber-50 border-amber-200">
          <CardContent>
            <p className="text-sm text-amber-900 font-medium mb-2">
              <AlertTriangle className="inline-block mr-2" size={16} />
              Cambio Principal
            </p>
            <p className="text-sm text-amber-800">
              La reforma modifica la base de cálculo salarial excluyendo conceptos
              variables, lo que puede reducir el monto de la indemnización
              aproximadamente un 15%.
            </p>
          </CardContent>
        </Card>

        <h2>¿Qué es la Reforma Laboral 2026?</h2>
        <p>
          La Reforma Laboral 2026 es un conjunto de modificaciones a la Ley de Contrato
          de Trabajo que busca modernizar las relaciones laborales en Argentina. Entre
          sus principales cambios está la redefinición del salario base para el cálculo
          de indemnizaciones.
        </p>

        <h2>Principales cambios en las indemnizaciones</h2>

        <h3>1. Exclusión de conceptos variables</h3>
        <p>
          La reforma establece que ciertos conceptos salariales variables no deben
          incluirse en la base de cálculo:
        </p>
        <ul>
          <li>Horas extras no habituales</li>
          <li>Bonos por productividad ocasionales</li>
          <li>Premios por objetivos</li>
          <li>Comisiones variables</li>
        </ul>

        <h3>2. Nueva fórmula de cálculo</h3>
        <p>
          El "mejor salario mensual" ahora considera solo los componentes fijos y
          habituales de la remuneración, excluyendo aproximadamente un 15% del salario
          total en la mayoría de los casos.
        </p>

        <Card className="my-8 bg-blue-50 border-blue-200">
          <CardContent>
            <p className="text-sm text-blue-900 font-medium mb-2">Ejemplo Comparativo</p>
            <div className="text-sm text-blue-800 space-y-2">
              <p>
                <strong>Salario total mensual:</strong> $1.000.000
              </p>
              <p>
                <strong>Régimen tradicional:</strong> Base = $1.000.000
              </p>
              <p>
                <strong>Reforma 2026:</strong> Base = $850.000 (excluye variables)
              </p>
              <p className="mt-4">
                <strong>Diferencia en indemnización (5 años):</strong> $750.000
              </p>
            </div>
          </CardContent>
        </Card>

        <h2>¿Quiénes están alcanzados?</h2>
        <p>La reforma se aplica a:</p>
        <ul>
          <li>Nuevas relaciones laborales iniciadas desde enero 2026</li>
          <li>
            Opcionalmente, a relaciones existentes si ambas partes lo acuerdan por escrito
          </li>
        </ul>

        <p>
          <strong>No se aplica retroactivamente</strong> a relaciones laborales iniciadas
          antes de la vigencia de la ley, salvo acuerdo expreso.
        </p>

        <h2>¿Qué conceptos NO cambian?</h2>
        <p>La reforma mantiene sin cambios:</p>
        <ul>
          <li>El cálculo de años de antigüedad</li>
          <li>Los plazos de preaviso</li>
          <li>El derecho a vacaciones proporcionales</li>
          <li>El SAC proporcional</li>
          <li>Las indemnizaciones especiales (doble, Art. 2, etc.)</li>
        </ul>

        <h2>Ventajas y desventajas</h2>

        <h3>Para trabajadores</h3>
        <p>
          <strong>Desventajas:</strong>
        </p>
        <ul>
          <li>Menor monto de indemnización en caso de despido</li>
          <li>Posible reducción del poder de negociación</li>
        </ul>

        <p>
          <strong>Ventajas potenciales:</strong>
        </p>
        <ul>
          <li>Mayor claridad sobre qué conceptos se incluyen</li>
          <li>Menos litigiosidad sobre el cálculo del "mejor salario"</li>
        </ul>

        <h3>Para empleadores</h3>
        <p>
          <strong>Ventajas:</strong>
        </p>
        <ul>
          <li>Reducción de costos por indemnizaciones</li>
          <li>Mayor previsibilidad en los cálculos</li>
        </ul>

        <h2>¿Cómo saber qué régimen se aplica en mi caso?</h2>
        <p>Usá nuestra calculadora con las dos opciones:</p>
        <ol>
          <li>Ingresá todos tus datos laborales</li>
          <li>Activá el "Modo Comparación"</li>
          <li>La herramienta te mostrará ambos cálculos lado a lado</li>
        </ol>

        <Card className="my-8 bg-primary-50 border-primary-200">
          <CardContent className="text-center py-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Compará ambos regímenes
            </h3>
            <Link href="/calculadora-indemnizacion">
              <Button size="lg">Usar Calculadora con Comparación</Button>
            </Link>
          </CardContent>
        </Card>

        <h2>Recomendaciones</h2>
        <ol>
          <li>
            <strong>Conocé tu recibo de sueldo:</strong> Identificá qué conceptos son
            fijos y cuáles variables
          </li>
          <li>
            <strong>Guardá documentación:</strong> Conservá todos tus recibos de sueldo y
            contratos
          </li>
          <li>
            <strong>Consultá un abogado:</strong> Ante cualquier duda sobre qué régimen
            te corresponde
          </li>
          <li>
            <strong>Acordá por escrito:</strong> Si tu empleador propone aplicar la
            reforma a tu contrato existente
          </li>
        </ol>

        <div className="mt-12 p-6 bg-gray-100 rounded-lg">
          <p className="text-sm text-gray-700">
            <strong>Aviso Legal:</strong> La información sobre la Reforma Laboral 2026
            está sujeta a cambios normativos y jurisprudenciales. Consultá con un
            abogado laboralista para casos específicos. Última actualización: Febrero
            2026.
          </p>
        </div>
      </article>
    </div>
  );
}
