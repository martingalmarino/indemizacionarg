import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent } from '@/components/Card';
import { Button } from '@/components/Button';
import { Check, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Preaviso Laboral en Argentina: Todo lo que Necesitás Saber',
  description:
    'Guía completa sobre el preaviso laboral en Argentina. Plazos, indemnización sustitutiva y derechos del trabajador.',
};

export default function PreavisoPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <article className="prose prose-lg max-w-none">
        <h1>Preaviso Laboral en Argentina: Guía Completa</h1>

        <p className="text-xl text-gray-600 mb-8">
          Entendé todo sobre el preaviso laboral: plazos, indemnización sustitutiva y tus
          derechos según la Ley de Contrato de Trabajo.
        </p>

        <h2>¿Qué es el preaviso?</h2>
        <p>
          El preaviso es la <strong>notificación anticipada</strong> que debe dar una de
          las partes de la relación laboral cuando decide finalizarla. Permite a la otra
          parte prepararse para el cambio: el trabajador puede buscar otro empleo, y el
          empleador puede buscar un reemplazo.
        </p>

        <h2>Plazos de preaviso</h2>
        <p>Según el Art. 231 de la LCT, los plazos son:</p>

        <div className="not-prose my-6">
          <Card>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b">
                  <div>
                    <p className="font-semibold text-gray-900">Menos de 5 años</p>
                    <p className="text-sm text-gray-600">de antigüedad</p>
                  </div>
                  <p className="text-2xl font-bold text-primary-600">1 mes</p>
                </div>
                <div className="flex items-center justify-between py-3">
                  <div>
                    <p className="font-semibold text-gray-900">5 años o más</p>
                    <p className="text-sm text-gray-600">de antigüedad</p>
                  </div>
                  <p className="text-2xl font-bold text-primary-600">2 meses</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="my-8 bg-blue-50 border-blue-200">
          <CardContent>
            <p className="text-sm text-blue-900 font-medium mb-2">
              <Check className="inline-block mr-2" size={14} />
              Importante
            </p>
            <p className="text-sm text-blue-800">
              El plazo se cuenta desde el día siguiente al de la notificación hasta el
              mismo día del mes siguiente.
            </p>
          </CardContent>
        </Card>

        <h2>Indemnización sustitutiva de preaviso</h2>
        <p>
          Si el empleador decide <strong>no dar preaviso</strong> y finalizar la
          relación de inmediato, debe pagar una indemnización equivalente al salario del
          período de preaviso.
        </p>

        <h3>Fórmula de cálculo</h3>
        <ul>
          <li>Menos de 5 años: 1 mes de sueldo</li>
          <li>5 años o más: 2 meses de sueldo</li>
        </ul>

        <p>Además, se debe sumar:</p>
        <ul>
          <li>
            <strong>SAC sobre preaviso:</strong> El aguinaldo proporcional (preaviso / 12)
          </li>
          <li>
            <strong>Integración del mes:</strong> Si el despido ocurre antes de fin de mes
          </li>
        </ul>

        <h2>¿Quién debe dar preaviso?</h2>

        <h3>Despido por parte del empleador</h3>
        <p>
          El empleador debe dar preaviso o pagar la indemnización sustitutiva, salvo en
          casos de:
        </p>
        <ul>
          <li>Despido con causa justificada</li>
          <li>Período de prueba (primeros 3 meses)</li>
          <li>Trabajo eventual</li>
        </ul>

        <h3>Renuncia del trabajador</h3>
        <p>
          El trabajador también debe dar preaviso al renunciar. Si no lo hace, el
          empleador puede <strong>descontar</strong> de la liquidación final el monto
          equivalente al preaviso no otorgado.
        </p>

        <Card className="my-8 bg-amber-50 border-amber-200">
          <CardContent>
            <p className="text-sm text-amber-900 font-medium mb-2">
              <AlertTriangle className="inline-block mr-2" size={16} />
              Atención
            </p>
            <p className="text-sm text-amber-800">
              Si renunciás sin preaviso, el empleador puede descontar hasta un mes de
              salario de tu liquidación final.
            </p>
          </CardContent>
        </Card>

        <h2>Cómo se notifica el preaviso</h2>
        <p>El preaviso debe notificarse por escrito mediante:</p>
        <ul>
          <li>
            <strong>Telegrama laboral:</strong> Forma más común y recomendada
          </li>
          <li>
            <strong>Carta documento:</strong> También válida
          </li>
          <li>
            <strong>Notificación en persona:</strong> Con testigos y constancia firmada
          </li>
          <li>
            <strong>Medios digitales:</strong> Si están habilitados en el convenio
          </li>
        </ul>

        <h2>Trabajo durante el preaviso</h2>

        <h3>¿Debo trabajar durante el preaviso?</h3>
        <p>
          Sí, el trabajador debe continuar prestando servicios normalmente durante el
          período de preaviso, salvo que el empleador lo releve de esa obligación.
        </p>

        <h3>Licencia para buscar empleo</h3>
        <p>
          Durante el preaviso, el trabajador tiene derecho a{' '}
          <strong>2 horas diarias</strong> pagas para buscar nuevo empleo. Puede optar
          por tomarlas al inicio o al final de la jornada.
        </p>

        <h2>Casos especiales</h2>

        <h3>Preaviso en trabajo a tiempo parcial</h3>
        <p>
          Los mismos plazos se aplican, pero el monto de la indemnización se calcula
          proporcionalmente al salario.
        </p>

        <h3>Convenios colectivos</h3>
        <p>
          Algunos convenios colectivos establecen condiciones más favorables. Siempre
          revisá tu convenio específico.
        </p>

        <h3>Período de prueba</h3>
        <p>
          Durante los primeros 3 meses no se requiere preaviso de ninguna de las partes.
        </p>

        <h2>Preguntas frecuentes</h2>

        <h3>¿Puedo renunciar sin dar preaviso?</h3>
        <p>
          Sí, pero el empleador puede descontar el equivalente al preaviso de tu
          liquidación final.
        </p>

        <h3>¿Qué pasa si me despiden estando de preaviso?</h3>
        <p>
          Si ya te notificaron el preaviso y te despiden antes de que finalice, debés
          cobrar los días faltantes como indemnización.
        </p>

        <h3>¿El preaviso se cuenta en la antigüedad?</h3>
        <p>
          Sí, los días del preaviso (trabajado o indemnizado) se cuentan como tiempo de
          servicio para el cálculo de antigüedad.
        </p>

        <Card className="my-8 bg-primary-50 border-primary-200">
          <CardContent className="text-center py-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Calculá tu indemnización completa
            </h3>
            <p className="text-gray-700 mb-4">
              Incluye preaviso, antigüedad, SAC y todos los conceptos
            </p>
            <Link href="/calculadora-indemnizacion">
              <Button size="lg">Usar Calculadora</Button>
            </Link>
          </CardContent>
        </Card>

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
