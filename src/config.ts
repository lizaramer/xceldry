// Site configuration
// XcelDry - Pañales para Adulto

export interface SiteConfig {
  language: string;
  title: string;
  description: string;
}

export const siteConfig: SiteConfig = {
  language: "es",
  title: "XcelDry - Pañales para Adulto | Calidad Premium sin Precio de Marca",
  description: "Pañales para adulto de calidad premium como TENA y Content, pero sin pagar por la marca. Ahorra hasta 20%. Venta por mayoreo, medio mayoreo y suscripción en Monterrey, NL.",
};

const withBase = (path: string): string => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

// Navigation configuration
export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationConfig {
  logo: string;
  links: NavLink[];
  contactLabel: string;
  contactHref: string;
}

export const navigationConfig: NavigationConfig = {
  logo: "XcelDry",
  links: [
    { label: "Inicio", href: "#hero" },
    { label: "Nosotros", href: "#about" },
    { label: "Servicios", href: "#services" },
    { label: "Productos", href: "#portfolio" },
    { label: "Testimonios", href: "#testimonials" },
  ],
  contactLabel: "Contáctanos",
  contactHref: "https://wa.me/522206091683",
};

// Hero section configuration
export interface HeroConfig {
  name: string;
  roles: string[];
  backgroundImage: string;
}

export const heroConfig: HeroConfig = {
  name: "XcelDry",
  roles: [
    "Calidad Premium",
    "Precio Justo",
    "Entrega a Domicilio",
    "Sin Marca",
    "Ahorro 20%",
    "Monterrey NL"
  ],
  backgroundImage: withBase("images/hero-bg.jpg"),
};

// About section configuration
export interface AboutStat {
  value: string;
  label: string;
}

export interface AboutImage {
  src: string;
  alt: string;
}

export interface AboutConfig {
  label: string;
  description: string;
  experienceValue: string;
  experienceLabel: string;
  stats: AboutStat[];
  images: AboutImage[];
}

export const aboutConfig: AboutConfig = {
  label: "Sobre Nosotros",
  description: "En XcelDry ofrecemos pañales para adulto con la misma calidad premium de las marcas reconocidas como TENA y Content, pero sin el costo adicional de la marca. Nuestro compromiso es brindar dignidad, comodidad y ahorro a las familias que cuidan de sus adultos mayores. Con nosotros ahorras hasta un 20% sin sacrificar calidad. Operamos en Monterrey, Nuevo León, con entregas directas y servicio de suscripción mensual.",
  experienceValue: "20%",
  experienceLabel: "de Ahorro\nGarantizado",
  stats: [
    { value: "2", label: "Modelos\nPremium" },
    { value: "4", label: "Tallas\nDisponibles" },
    { value: "3", label: "Modalidades\nde Venta" },
    { value: "24h", label: "Entrega\nen Monterrey" },
  ],
  images: [
    { src: withBase("images/about-1.jpg"), alt: "Productos XcelDry de calidad premium" },
    { src: withBase("images/about-2.jpg"), alt: "Dignidad para el adulto mayor" },
    { src: withBase("images/about-3.jpg"), alt: "Cuidado profesional" },
    { src: withBase("images/about-4.jpg"), alt: "Compromiso con la calidad" },
  ],
};

// Services section configuration
export interface ServiceItem {
  iconName: string;
  title: string;
  description: string;
  image: string;
}

export interface ServicesConfig {
  label: string;
  heading: string;
  services: ServiceItem[];
}

export const servicesConfig: ServicesConfig = {
  label: "Nuestros Servicios",
  heading: "Soluciones adaptadas a tus necesidades",
  services: [
    {
      iconName: "Package",
      title: "Venta por Mayoreo",
      description: "Ideal para asilos, casas de adultos mayores y distribuidores. Precios especiales para compras en gran volumen. Facturación disponible.",
      image: withBase("images/service-3.jpg"),
    },
    {
      iconName: "Boxes",
      title: "Medio Mayoreo",
      description: "Perfecto para cuidadores y enfermeras que atienden múltiples pacientes. Cantidades intermedias con descuentos atractivos.",
      image: withBase("images/service-1.jpg"),
    },
    {
      iconName: "CalendarCheck",
      title: "Suscripción Mensual",
      description: "Para familias ocupadas que prefieren el surtido automático. Entrega programada cada mes en tu domicilio en Monterrey. Sin preocupaciones.",
      image: withBase("images/service-2.jpg"),
    },
    {
      iconName: "Headphones",
      title: "Atención Personalizada",
      description: "Asesoría experta para elegir el producto adecuado según las necesidades del paciente. Te ayudamos a encontrar la talla y modelo perfectos.",
      image: withBase("images/service-4.jpg"),
    },
  ],
};

// Portfolio section configuration
export interface ProjectItem {
  title: string;
  category: string;
  year: string;
  image: string;
  featured?: boolean;
}

export interface PortfolioCTA {
  label: string;
  heading: string;
  linkText: string;
  linkHref: string;
}

export interface PortfolioConfig {
  label: string;
  heading: string;
  description: string;
  projects: ProjectItem[];
  cta: PortfolioCTA;
  viewAllLabel: string;
}

export const portfolioConfig: PortfolioConfig = {
  label: "Nuestros Productos",
  heading: "Calidad premium para cada necesidad",
  description: "Dos líneas de productos diseñadas para ofrecer la mejor protección y comodidad. Todos nuestros pañales cuentan con tecnología de absorción avanzada, neutralizador de olores y materiales suaves que cuidan la piel.",
  projects: [
    {
      title: "XcelDry Supreme",
      category: "Calidad Premium - Talla M",
      year: "M: 45-75kg",
      image: withBase("images/portfolio-1.jpg"),
      featured: true,
    },
    {
      title: "XcelDry Supreme",
      category: "Calidad Premium - Talla G",
      year: "G: 75-110kg",
      image: withBase("images/portfolio-4.jpg"),
    },
    {
      title: "XcelDry Extreme",
      category: "Calidad Excelente - Talla M",
      year: "M: 45-75kg",
      image: withBase("images/portfolio-2.jpg"),
    },
    {
      title: "XcelDry Extreme",
      category: "Calidad Excelente - Talla G",
      year: "G: 75-110kg",
      image: withBase("images/portfolio-3.jpg"),
    },
    {
      title: "Suscripción Mensual",
      category: "Entrega Automática a Domicilio",
      year: "Monterrey NL",
      image: withBase("images/portfolio-5.jpg"),
      featured: true,
    },
  ],
  cta: {
    label: "¿Necesitas ayuda?",
    heading: "Te asesoramos para elegir el producto ideal",
    linkText: "Contáctanos por WhatsApp",
    linkHref: "https://wa.me/522206091683",
  },
  viewAllLabel: "Ver Todos los Productos",
};

// Testimonials section configuration
export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
  rating: number;
}

export interface TestimonialsConfig {
  label: string;
  heading: string;
  testimonials: TestimonialItem[];
}

export const testimonialsConfig: TestimonialsConfig = {
  label: "Testimonios",
  heading: "Lo que dicen nuestros clientes",
  testimonials: [
    {
      quote: "Llevamos 6 meses usando XcelDry Supreme en el asilo. La calidad es idéntica a TENA pero el ahorro es significativo. Nuestros residentes están cómodos y nosotros contentos con el presupuesto.",
      author: "María Elena García",
      role: "Directora",
      company: "Hogar San José - Asilo de Adultos Mayores",
      image: withBase("images/testimonial-1.jpg"),
      rating: 5,
    },
    {
      quote: "Como enfermero a domicilio, atiendo a varios pacientes. El medio mayoreo me permite tener siempre stock disponible. La suscripción mensual es perfecta para mis clientes regulares.",
      author: "Roberto Hernández",
      role: "Enfermero Profesional",
      company: "Cuidados Domiciliarios Monterrey",
      image: withBase("images/testimonial-2.jpg"),
      rating: 5,
    },
    {
      quote: "La suscripción mensual me salvó la vida. Trabajo todo el día y antes olvidaba comprar los pañales de mi mamá. Ahora llegan solos a mi puerta. El servicio es excelente.",
      author: "Carmen López",
      role: "Hija y Cuidadora",
      company: "Cliente de Suscripción",
      image: withBase("images/testimonial-3.jpg"),
      rating: 5,
    },
  ],
};

// CTA section configuration
export interface CTAConfig {
  tags: string[];
  heading: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  email: string;
  backgroundImage: string;
}

export const ctaConfig: CTAConfig = {
  tags: ["Mayoreo", "Medio Mayoreo", "Suscripción"],
  heading: "Dignidad y calidad al mejor precio",
  description: "Únete a las familias y cuidadores que ya descubrieron que pueden tener calidad premium sin pagar de más. Contáctanos hoy y empieza a ahorrar.",
  buttonText: "Escríbenos por WhatsApp",
  buttonHref: "https://wa.me/522206091683",
  email: "xceldry@gmail.com",
  backgroundImage: withBase("images/cta-bg.jpg"),
};

// Footer section configuration
export interface FooterLinkColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface SocialLink {
  iconName: string;
  href: string;
  label: string;
}

export interface FooterConfig {
  logo: string;
  description: string;
  columns: FooterLinkColumn[];
  socialLinks: SocialLink[];
  newsletterHeading: string;
  newsletterDescription: string;
  newsletterButtonText: string;
  newsletterPlaceholder: string;
  copyright: string;
  credit: string;
}

export const footerConfig: FooterConfig = {
  logo: "XcelDry",
  description: "Pañales para adulto de calidad premium como TENA y Content, pero sin pagar por la marca. Ahorra hasta 20%. Venta por mayoreo, medio mayoreo y suscripción en Monterrey, Nuevo León.",
  columns: [
    {
      title: "Productos",
      links: [
        { label: "XcelDry Supreme M", href: "#portfolio" },
        { label: "XcelDry Supreme G", href: "#portfolio" },
        { label: "XcelDry Extreme M", href: "#portfolio" },
        { label: "XcelDry Extreme G", href: "#portfolio" },
      ],
    },
    {
      title: "Servicios",
      links: [
        { label: "Venta por Mayoreo", href: "#services" },
        { label: "Medio Mayoreo", href: "#services" },
        { label: "Suscripción Mensual", href: "#services" },
        { label: "Entrega a Domicilio", href: "#services" },
      ],
    },
    {
      title: "Contacto",
      links: [
        { label: "WhatsApp: 220 609 1683", href: "https://wa.me/522206091683" },
        { label: "Email: xceldry@gmail.com", href: "mailto:xceldry@gmail.com" },
        { label: "Monterrey, Nuevo León", href: "#" },
      ],
    },
  ],
  socialLinks: [
    { iconName: "MessageCircle", href: "https://wa.me/522206091683", label: "WhatsApp" },
    { iconName: "Mail", href: "mailto:xceldry@gmail.com", label: "Email" },
  ],
  newsletterHeading: "Suscríbete a nuestro newsletter",
  newsletterDescription: "Recibe ofertas especiales y novedades directamente en tu correo.",
  newsletterButtonText: "Suscribirse",
  newsletterPlaceholder: "tu@email.com",
  copyright: "© 2024 XcelDry. Todos los derechos reservados.",
  credit: "Calidad premium al mejor precio",
};
