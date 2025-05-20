import { FaCode, FaDatabase, FaCloud, FaRobot, FaChartLine, FaLightbulb } from 'react-icons/fa';

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: <FaCode className="w-6 h-6 text-lime-300" />,
    title: 'Desarrollo Web',
    description: 'Creamos sitios web y aplicaciones a medida con las últimas tecnologías para potenciar tu presencia digital.',
  },
  {
    icon: <FaLightbulb className="w-6 h-6 text-lime-300" />,
    title: 'Consultoría para PYMEs',
    description: 'Asesoramiento tecnológico especializado para pequeñas y medianas empresas que buscan optimizar sus procesos y recursos.',
  },
  {
    icon: <FaDatabase className="w-6 h-6 text-lime-300" />,
    title: 'Bases de Datos',
    description: 'Diseño e implementación de soluciones de almacenamiento de datos eficientes, seguras y escalables.',
  },
  {
    icon: <FaCloud className="w-6 h-6 text-lime-300" />,
    title: 'Soluciones Cloud',
    description: 'Migración, optimización y gestión de infraestructuras en la nube para maximizar la eficiencia y reducir costes.',
  },
  {
    icon: <FaRobot className="w-6 h-6 text-lime-300" />,
    title: 'Inteligencia Artificial',
    description: 'Implementación de soluciones de IA y machine learning para automatizar procesos y obtener insights valiosos.',
  },
  {
    icon: <FaChartLine className="w-6 h-6 text-lime-300" />,
    title: 'Analítica de Datos',
    description: 'Transformamos tus datos en información accionable para tomar decisiones estratégicas basadas en evidencia.',
  },
]; 