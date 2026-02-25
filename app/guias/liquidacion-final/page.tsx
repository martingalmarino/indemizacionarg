import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent } from '@/components/Card';
import { Button } from '@/components/Button';
import { Check, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Liquidación Final: Qué Incluye y Cómo Calcularla | Argentina 2026',
  description:
    'Guía completa sobre la liquidación final en Argentina. Conceptos incluidos, plazos de pago y cómo verificar que esté completa.',
};

export default function LiquidacionFinalPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <article className="prose prose-lg max-w-none">
        <h1>Liquidación Final: Guía Completa para Trabajadores</h1>

        <p className="text-xl text-gray-600 mb-8">
          Todo lo que necesitás saber sobre la liquidación final al terminar tu relación
          laboral en Argentina.
        </p>

        <h2>¿Qué es la liquidación final?</h2>
        <p>
          La liquidación final es el <strong>documento y el pago</strong> que el
          empleador debe entregarte al finalizar la relación laboral. Incluye todos los
          conceptos adeudados: sueldo pendiente, indemnizaciones, vacaciones, aguinaldo
          y más.
        </p>

        <Card className="my-8 bg-blue-50 border-blue-200">
          <CardContent>
            <p className="text-sm text-blue-900 font-medium mb-2">
              <Check className="inline-block mr-2" size={14} />
              Plazo de pago
            </p>
            <p className="text-sm text-blue-800">
              El empleador tiene <strong>4 días hábiles</strong> desde la finalización
              de la relación laboral para pagar la liquidación completa.
            </p>
          </CardContent>
        </Card>

        <h2>Conceptos incluidos en la liquidación</h2>

        <h3>1. Sueldo del mes trabajado</h3>
        <p>
          El salario correspondiente a los días trabajados del último mes, incluyendo
          horas extras, comisiones y cualquier otro concepto habitual.
        </p>

        <h3>2. Indemnización por antigüedad (Art. 245)</h3>
        <p>
          Un mes de sueldo por cada año trabajado o fracción mayor a 3 meses. Este
          concepto solo aplica en despidos sin causa.
        </p>

        <h3>3. Preaviso</h3>
        <p>
          Si no te dieron aviso previo:
        </p>
        <ul>
          <li>Menos de 5 años de antigüedad: 1 mes de sueldo</li>
          <li>5 años o más: 2 meses de sueldo</li>
        </ul>

        <h3>4. Integración del mes</h3>
        <p>
          Si el despido ocurrió antes de finalizar el mes calendario, los días
          restantes hasta fin de mes.
        </p>

        <h3>5. SAC proporcional</h3>
        <p>
          El aguinaldo correspondiente a los meses trabajados en el semestre (enero-junio
          o julio-diciembre).
        </p>
        <p>
          <strong>Cálculo:</strong> (Mejor salario × Meses trabajados) / 12
        </p>

        <h3>6. SAC sobre preaviso</h3>
        <p>
          Si corresponde preaviso, también se debe pagar el aguinaldo sobre ese período.
        </p>
        <p>
          <strong>Cálculo:</strong> Preaviso / 12
        </p>

        <h3>7. Vacaciones no gozadas</h3>
        <p>Incluye dos conceptos:</p>
        <ul>
          <li>
            <strong>Vacaciones del año anterior:</strong> Si no las tomaste, debés
            cobrarlas
          </li>
          <li>
            <strong>Vacaciones proporcionales:</strong> Por el tiempo trabajado en el
            último año
          </li>
        </ul>

        <div className="not-prose my-6">
          <Card>
            <CardContent>
              <p className="text-sm font-semibold text-gray-900 mb-3">
                Días de vacaciones según antigüedad:
              </p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Hasta 5 años</span>
                  <span className="font-semibold">14 días</span>
                </div>
                <div className="flex justify-between">
                  <span>5 a 10 años</span>
                  <span className="font-semibold">21 días</span>
                </div>
                <div className="flex justify-between">
                  <span>10 a 20 años</span>
                  <span className="font-semibold">28 días</span>
                </div>
                <div className="flex justify-between">
                  <span>Más de 20 años</span>
                  <span className="font-semibold">35 días</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <h2>Descuentos en la liquidación</h2>
        <p>El empleador puede descontar:</p>
        <ul>
          <li>Aportes jubilatorios y obra social del último mes</li>
          <li>Cuota sindical (si corresponde)</li>
          <li>Adelantos de sueldo no devueltos</li>
          <li>Preaviso no otorgado por el trabajador (en caso de renuncia)</li>
        </ul>

        <Card className="my-8 bg-amber-50 border-amber-200">
          <CardContent>
            <p className="text-sm text-amber-900 font-medium mb-2">
              <AlertTriangle className="inline-block mr-2" size={16} />
              Atención
            </p>
            <p className="text-sm text-amber-800">
              El empleador NO puede descontar herramientas rotas, faltantes de caja u
              otros conceptos sin orden judicial.
            </p>
          </CardContent>
        </Card>

        <h2>Cómo verificar tu liquidación</h2>

        <h3>1. Revisá el recibo</h3>
        <p>Asegurate de que incluya todos los conceptos mencionados arriba.</p>

        <h3>2. Verificá los montos</h3>
        <p>Usá nuestra calculadora para comparar:</p>
        <ul>
          <li>Indemnización por antigüedad</li>
          <li>Preaviso e integración</li>
          <li>SAC proporcional</li>
          <li>Vacaciones</li>
        </ul>

        <Card className="my-8 bg-primary-50 border-primary-200">
          <CardContent className="text-center py-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Verificá tu liquidación
            </h3>
            <p className="text-gray-700 mb-4">
              Calculá cuánto deberías cobrar y compará con tu recibo
            </p>
            <Link href="/calculadora-indemnizacion">
              <Button size="lg">Calcular Ahora</Button>
            </Link>
          </CardContent>
        </Card>

        <h3>3. Consultá con un experto</h3>
        <p>
          Si los montos no coinciden o tenés dudas, consultá con un abogado laboralista
          antes de firmar.
        </p>

        <h2>Firma de la liquidación</h2>

        <h3>¿Debo firmar?</h3>
        <p>
          No estás obligado a firmar inmediatamente. Tomate tu tiempo para revisar todo.
        </p>

        <h3>¿Qué implica la firma?</h3>
        <p>
          Firmar el recibo de liquidación significa que estás <strong>conforme</strong>{' '}
          con los montos. Sin embargo, si luego descubrís errores, podés reclamar dentro
          de los 2 años.
        </p>

        <h3>Homologación ante el Ministerio</h3>
        <p>
          Para mayor seguridad, podés pedir que la liquidación se{' '}
          <strong>homologue</strong> ante el Ministerio de Trabajo. Esto garantiza que:
        </p>
        <ul>
          <li>Los conceptos están correctos</li>
          <li>No renunciás a derechos</li>
          <li>Hay validez legal del acuerdo</li>
        </ul>

        <h2>¿Qué hago si no me pagan?</h2>

        <h3>Paso 1: Intimación</h3>
        <p>
          Enviá un telegrama laboral intimando el pago dentro de 48 horas.
        </p>

        <h3>Paso 2: Ministerio de Trabajo</h3>
        <p>
          Iniciá un reclamo administrativo (gratuito). El Ministerio citará a tu
          empleador a una audiencia de conciliación.
        </p>

        <h3>Paso 3: Demanda judicial</h3>
        <p>
          Si no se resuelve, iniciá una demanda judicial con un abogado laboralista. Los
          honorarios se pagan al final del juicio.
        </p>

        <h2>Casos especiales</h2>

        <h3>Renuncia</h3>
        <p>
          Si renunciaste, no cobrás indemnización por antigüedad ni preaviso, pero sí el
          resto de conceptos (sueldo, SAC, vacaciones).
        </p>

        <h3>Despido con causa</h3>
        <p>
          Si te despidieron con causa justificada, no cobrás indemnización. Solo los
          conceptos no indemnizatorios (sueldo del mes, SAC y vacaciones proporcionales
          pendientes).
        </p>

        <h3>Período de prueba</h3>
        <p>
          Durante los primeros 3 meses, no hay derecho a indemnización, solo a los
          conceptos devengados.
        </p>

        <h2>Consejos finales</h2>
        <ol>
          <li>
            <strong>Guardá todo:</strong> Recibos de sueldo, contrato, telegramas
          </li>
          <li>
            <strong>No firmes apurado:</strong> Revisá todo con calma
          </li>
          <li>
            <strong>Calculá antes:</strong> Usá nuestra herramienta para saber cuánto te
            corresponde
          </li>
          <li>
            <strong>Consultá un abogado:</strong> Ante cualquier duda, especialmente si
            los montos son altos
          </li>
          <li>
            <strong>Exigí homologación:</strong> Para acuerdos importantes
          </li>
        </ol>

        <div className="mt-12 p-6 bg-gray-100 rounded-lg">
          <p className="text-sm text-gray-700">
            <strong>Aviso Legal:</strong> Esta guía tiene fines informativos. Para casos
            específicos, consultá con un abogado laboralista. Última actualización:
            Febrero 2026.
          </p>
        </div>
      </article>
    </div>
  );
}
