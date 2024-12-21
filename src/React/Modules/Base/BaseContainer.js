import Box from '@mui/material/Box';
import HeaderContainer from './HeaderContainer';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestHomeModuleInfo } from './../../ReduxSaga/Actions/Home'

const BaseContainer = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(requestHomeModuleInfo());
    },[])

    
    const appReducers = {};
    appReducers.user = useSelector((state) => state.user);
    appReducers.home = useSelector((state) => state.home);
  
    const eventList = [
      {
          id: 3,
          tipo: "clase",
          foco: false,
          img:"erotica",
          lugar: "Zona Rosa",
          titulo: "Sesion Erotica",
          informacion: "¿Listo para una experiencia que te conecte con tu esencia y explore la sensualidad de una manera consciente? Una sesión erótica es tu puerta de entrada a un mundo de espiritualidad y conexión personal como nunca antes.",
          objetivo: "Respiración consciente y meditación, Toques sensuales, Conexión emocional profunda, Ejercicios de confianza y respeto.",
          incluye: "Nuestra sesión erótica se adapta a tus necesidades y deseos. Ya sea que busques una mayor conexión en pareja (pareja de trabajo o sentimental) o una experiencia individual, estamos aquí para guiarte.*Entorno de Respeto y Consentimiento: Tu comodidad es nuestra prioridad.*Todas las sesiones se llevan a cabo en un ambiente de respeto y comunicación abierta.",
          actividades: "",
          itinerario: "",
          comentarios: "",
          llamada: "La sesión erótica  es un viaje hacia la autoconciencia, la intimidad y la espiritualidad. ¡Reserva tu sesión erótica y comienza a explorar tu verdadera esencia hoy!",
          fechaDescriptiva: "14 de Diciembre",
          fecha: new Date(2024,11,14)
      },
      {
          id: 8,
          tipo: "clase",
          foco: false,
          img:"eneagrama",
          lugar: "Zona Rosa",
          titulo: "CONECTANDO CON MI ESCENCIA ",
          informacion: "Un sistema de crecimiento personal que te revelan la mejor combinación para construir o reforzar tu bienestar personal y éxito profesional.",
          objetivo: "Te ayudaremos a encontrar tu propia fórmula de éxito y bienestar basada en tu realidad.",
          incluye: "Sistema de nueve posibilidades de crecimiento, que te ayudaran a identificar con claridad tus puntos ciegos y tus fortalezas. ",
          actividades: "",
          itinerario: "",
          comentarios: "",
          llamada: "No es un taller mas, es el taller que necesitas tomar, Reserva Ya.",
          fechaDescriptiva: "15 de Diciembre",
          fecha: new Date(2024,11,15)
      },
      {
          id: 1,
          tipo: "viaje",
          foco: false,
          img:"posada",
          lugar: "Morelos",
          titulo: "Gran Posada Nudista",
          informacion: "DISFRUTA DEL NUDISMO, En un ambiente seguro, divertido de convivencia, disfruta de un fin de semana para que te relajes y disfrutes al máximo.",
          objetivo: "",
          incluye: "Transporte Ida y vuelta*Estancia*Comida, cena, desayuno",
          actividades: "",
          itinerario: "Salida viernes 20 Dic 6:00 pm DESDE METRO GENERAL ANAYA.*Regreso el Domingo 22 3:00 pm Saliendo de allá.",
          comentarios: "Pregunta por las Opciones y facilidades de pagó",
          llamada: "",
          fechaDescriptiva: "20, 21, 22 de Diciembre",
          fecha: new Date(2024,11,20)
      },
      {
          id: 2,
          tipo: "clase",
          foco: false,
          img:"lingam",
          lugar: "Zona Rosa",
          titulo: "Taller de  Masaje Lingam",
          informacion: "Un Camino hacia el Placer y la Conexión ¿Estás listo para explorar nuevas fronteras de placer y sensualidad?, El Masaje Lingam es una experiencia única que te llevará a un mundo de relajación, intimidad y autoconciencia.",
          objetivo: "",
          incluye: "Una experiencia de masaje sensual.*Relajación profunda y exploración de la sensualidad.*Conexión emocional con tu cuerpo.",
          actividades: "",
          itinerario: "",
          comentarios: "",
          llamada: "Descubre el Placer y la Conexión: Reconecta con tu cuerpo y experimenta una nueva dimensión de placer y sensualidad. ¡Reserva tu experiencia de Masaje Lingam hoy mismo!",
          fechaDescriptiva: "20 de Diciembre",
          fecha: new Date(2024,11,20)
      },
      {
          id: 4,
          tipo: "clase",
          foco: false,
          img:"erotica",
          lugar: "Zona Rosa",
          titulo: "Sesion Erotica",
          informacion: "¿Listo para una experiencia que te conecte con tu esencia y explore la sensualidad de una manera consciente? Una sesión erótica es tu puerta de entrada a un mundo de espiritualidad y conexión personal como nunca antes.",
          objetivo: "Respiración consciente y meditación, Toques sensuales, Conexión emocional profunda, Ejercicios de confianza y respeto.",
          incluye: "*Nuestra sesión erótica se adapta a tus necesidades y deseos. Ya sea que busques una mayor conexión en pareja (pareja de trabajo o sentimental) o una experiencia individual, estamos aquí para guiarte.*Entorno de Respeto y Consentimiento: Tu comodidad es nuestra prioridad. Todas las sesiones se llevan a cabo en un ambiente de respeto y comunicación abierta.",
          actividades: "",
          itinerario: "",
          comentarios: "",
          llamada: "La sesión erótica  es un viaje hacia la autoconciencia, la intimidad y la espiritualidad. ¡Reserva tu sesión erótica y comienza a explorar tu verdadera esencia hoy!",
          fechaDescriptiva: "28 de Diciembre",
          fecha: new Date(2024,11,28)
      },
      {
          id: 9,
          tipo: "clase",
          foco: false,
          img:"cumcontrol",
          lugar: "Zona Rosa",
          titulo: "Cum Control",
          informacion: "¿Quieres durar más pero terminas antes?, En nuestras sesiones de Cum Control, aprenderás técnicas efectivas, nuevos ejercicios y dinámicas diseñadas para ayudarte a alcanzar tu objetivo.",
          objetivo: "En estas sesiones, trabajarás tanto en pareja como en grupo con otros participantes. El objetivo es que experimentes nuevas formas de darte amor y descubras un control sexual pleno.🍆💦",
          incluye: "100 minutos de interacción y dinámicas.*Lubricante individual (Aceite de coco)*Toallitas  húmedas y papel higiénico.",
          actividades: "",
          itinerario: "",
          comentarios: "",
          llamada: "",
          fechaDescriptiva: "28 de Diciembre",
          fecha: new Date(2024,11,28)
      },
      {
          id: 10,
          tipo: "clase",
          foco: false,
          img:"dibujo",
          lugar: "Zona Rosa",
          titulo: "Taller de Dibujo al desnudo",
          informacion: "Taller de Dibujo al Desnudo, una experiencia única donde el instructor, el modelo y los aprendices se encuentran en un ambiente de creatividad y aprendizaje absoluto al desnudo.",
          objetivo: "Asesoríaprofesional: Recibe orientación y consejos de un profesional experimentado. Convivencia durante la sesión. Sal con tu dibujo en mano desde las primer sesión.",
          incluye: "Herramientas basicas*Cafecito*Aperitivos*Ambiente ameno para disfrutar mientras dibujas",
          actividades: "",
          itinerario: "",
          comentarios: "",
          llamada: "¡No dejes pasar esta oportunidad de explorar tu creatividad y mejorar tus habilidades artísticas!",
          fechaDescriptiva: "29 de Diciembre",
          fecha: new Date(2024,11,29)
      },
      {
          id: 11,
          tipo: "especial",
          foco: false,
          img:"convivenciaNav",
          lugar: "Al confirmar",
          titulo: "Convivencia Navideña Nudista",
          informacion: "¿Eres nuevo?, Te damos la bienvenida con un costo especial de $150 para acceder a esta increíble convivencia. La idea es disfrutar, compartir, y pasarla increíble en un ambiente relajado y respetuoso.",
          objetivo: "",
          incluye: "",
          actividades: "",
          itinerario: "",
          comentarios: "Una vez realizado tu pago, te enviaremos la dirección exacta del evento.",
          llamada: "¡Ven y celebra con el mejor GRUPO NUDISTA DE CDMX... CHAKNÚUL.!",
          fechaDescriptiva: "28 de Diciembre",
          fecha: new Date(2024,11,28)
      },
      {
          id: 12,
          tipo: "especial",
          foco: false,
          img:"juegos",
          lugar: "Santa María la Rivera, Cerca del metro revolución o metrobus el Chopo.",
          titulo: "Tarde de Juegos",
          informacion: "¡Cierra el año con nuestro divertido evento nudista o en calzones!, Este domingo 29 de diciembre, te invitamos a vivir una experiencia única llena de juegos, dinámicas de grupo, botanas  y un ambiente inigualable.",
          objetivo: "",
          incluye: "",
          actividades: "",
          itinerario: "",
          comentarios: "Costo de acceso: Costo General $200, Si asististe a nuestra Convivencia Navideña solo pagas $150, Si reservaste TALLER DE DIBUJO. $100",
          llamada: "No te pierdas esta tarde inolvidable con Chaknuul, ¡Diversión, confianza y comunidad te esperan!",
          fechaDescriptiva: "29 de Diciembre",
          fecha: new Date(2024,11,29)
      },
      {
          id: 13,
          tipo: "clase",
          foco: false,
          img:"nudismo",
          lugar: "Zona Rosa",
          titulo: "Taller de Induccion al nudismo",
          informacion: "¿Te has preguntado cómo sería liberarte de prejuicios, inseguridades y miedos? Nuestro Taller de Inducción al Nudismo te ofrece la oportunidad perfecta para conectar con tu cuerpo de una manera auténtica y natural.",
          objetivo: "Este taller está diseñado especialmente para quienes quieren dar el primer paso en el nudismo y buscan hacerlo de manera gradual y guiada.",
          incluye: "Facilitador especializado que te guiará con profesionalismo y empatía. *Ejercicios progresivos para una introducción cómoda y respetuosa al nudismo. *Un entorno seguro y privado, libre de juicios, donde podrás expresarte con total confianza.*Técnicas de relajación que te ayudarán a soltar tensiones y a conectar con tu cuerpo.*Actividades grupales para explorar la convivencia desde la autenticidad",
          actividades: "",
          itinerario: "",
          comentarios: "",
          llamada: "¿Listo para dar el paso?  experimenta la verdadera conexión contigo mismo.",
          fechaDescriptiva: "PROXIMAMENTE",
          fecha: new Date(2999,0,0)
      }
  ]

  useEffect(() => {
    console.log("eventList Base", eventList)
  },[])

  return (
    <Box sx={{ display: 'flex' }}>
      <Box component="main" sx={{ p: 3, marginTop: 10, marginLeft: 5, marginRight: 5 }}>
        {React.cloneElement(props.children, { eventList })}
      </Box>
    </Box>
  );
}
export default BaseContainer;