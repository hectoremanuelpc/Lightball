import { IconType } from 'react-icons';
import { BsCheckCircle, BsPerson, BsLightning, BsHeadset, BsGraphUp, BsShieldCheck } from 'react-icons/bs';

export interface Feature {
  title: string;
  description: string;
  icon: IconType;
}

export const features: Feature[] = [
  {
    title: 'Experiencia Comprobada',
    description: 'Más de 10 años de experiencia en el desarrollo de soluciones tecnológicas innovadoras.',
    icon: BsCheckCircle
  },
  {
    title: 'Enfoque Personalizado',
    description: 'Cada proyecto es único. Desarrollamos soluciones a medida que se adaptan a tus necesidades específicas.',
    icon: BsPerson
  },
  {
    title: 'Tecnología de Vanguardia',
    description: 'Utilizamos las últimas tecnologías y metodologías para garantizar resultados óptimos.',
    icon: BsLightning
  },
  {
    title: 'Soporte Continuo',
    description: 'Ofrecemos soporte técnico y mantenimiento continuo para asegurar el funcionamiento óptimo de tus sistemas.',
    icon: BsHeadset
  },
  {
    title: 'Metodología Ágil',
    description: 'Trabajamos con metodologías ágiles que permiten adaptarnos rápidamente a cambios y entregar valor de forma continua.',
    icon: BsGraphUp
  },
  {
    title: 'Resultados Medibles',
    description: 'Nos enfocamos en entregar resultados tangibles y medibles que impacten positivamente en tu negocio.',
    icon: BsShieldCheck
  }
]; 