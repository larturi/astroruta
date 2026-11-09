const CHAPTERS = [
  {name:'El alfabeto del cielo', sub:'Signos, elementos y planetas', start:1, end:5, color:'#D7ACFF', glyph:'✦'},
  {name:'Tu mapa personal', sub:'Cómo leer una carta natal', start:6, end:10, color:'#8DC9E8', glyph:'◈'},
  {name:'Conversaciones celestes', sub:'Aspectos e interacciones', start:11, end:16, color:'#FFD08C', glyph:'✳'},
  {name:'El cielo en movimiento', sub:'Tránsitos, fases y ciclos', start:17, end:22, color:'#B8D6AC', glyph:'☾'},
  {name:'La mirada avanzada', sub:'Técnicas de interpretación', start:23, end:28, color:'#F0A8BB', glyph:'✧'}
];

const LESSONS = [
{
 title:'Los 12 signos del zodíaco',symbol:'♈',time:9,tag:'El punto de partida',
 summary:'Los signos no son planetas: son doce sectores de 30° que sirven para describir el estilo con el que se expresa una posición en la carta.',
 sections:[
 ['La rueda zodiacal','En la astrología occidental tropical, el círculo de 360° se divide en doce signos: Aries, Tauro, Géminis, Cáncer, Leo, Virgo, Libra, Escorpio, Sagitario, Capricornio, Acuario y Piscis. Cada uno ocupa 30°. El inicio de Aries se fija en el equinoccio de marzo, por eso este zodíaco no coincide necesariamente con las constelaciones astronómicas.'],
 ['Más que “ser de un signo”','Cuando alguien dice “soy Virgo”, normalmente habla de su signo solar. Pero la Luna, Mercurio y los demás cuerpos también ocupan signos. El mismo signo puede describir cómo se expresa una emoción, una decisión o una conversación, según qué planeta lo ocupe. Los signos son categorías simbólicas, no retratos infalibles de personalidad.']
 ],keys:['Son 12 signos, de 30° cada uno.','Tu “signo” cotidiano suele ser el del Sol.','Todos los planetas de la carta tienen un signo.','Signo y constelación no son lo mismo.'],
 example:'Una persona puede tener el Sol en Virgo, la Luna en Aries y Venus en Libra. No son tres identidades contradictorias: en astrología, cada posición representa una función diferente.',
 memory:'Pensá en los signos como doce estilos de hablar. El planeta es quien habla.',
 challenge:'Elegí tres signos que conozcas y escribí una palabra que asocies con cada uno. Al terminar el curso, revisá si esas asociaciones cambiaron.',
 flashQ:'¿Cuántos grados ocupa cada signo?',flashA:'30°. Doce signos × 30° = 360°.',
 quiz:{q:'Si alguien dice “soy Leo”, normalmente se refiere a…',a:['Su signo ascendente','El signo en el que estaba el Sol al nacer','La casa donde estaba Marte'],correct:1,why:'El signo solar es el más popular, pero solo representa una parte de la carta natal.'}
},
{
 title:'Los cuatro elementos',symbol:'△',time:8,tag:'Cuatro maneras de expresarse',
 summary:'Fuego, Tierra, Aire y Agua agrupan los signos según una cualidad simbólica compartida.',
 sections:[
 ['Qué representa cada elemento','Fuego se asocia con impulso, entusiasmo y acción; Tierra con lo tangible, los recursos y la estabilidad; Aire con ideas, lenguaje y vínculos intelectuales; Agua con sensibilidad, intuición y afectos. No indican composición física de los planetas: son metáforas tradicionales.'],
 ['La distribución de los signos','Fuego: Aries, Leo, Sagitario. Tierra: Tauro, Virgo, Capricornio. Aire: Géminis, Libra, Acuario. Agua: Cáncer, Escorpio, Piscis. En una carta natal se puede contar cuántos planetas hay en cada elemento, aunque esa distribución no determina por sí sola la personalidad.']
 ],keys:['Fuego: acción.','Tierra: concreción.','Aire: pensamiento.','Agua: emoción.'],
 example:'Virgo es Tierra: se lo vincula con ordenar y mejorar lo concreto. Libra es Aire: se lo asocia con intercambiar ideas y negociar.',
 memory:'Fuego enciende, Tierra construye, Aire conecta, Agua siente.',
 challenge:'Asigná un elemento a Aries, Escorpio, Acuario y Capricornio sin mirar la lista anterior.',
 flashQ:'¿Qué signos pertenecen al elemento Tierra?',flashA:'Tauro, Virgo y Capricornio.',
 quiz:{q:'¿Cuál de estos signos es de Aire?',a:['Escorpio','Acuario','Tauro'],correct:1,why:'Acuario, Géminis y Libra son los tres signos de Aire.'}
},
{
 title:'Las tres modalidades',symbol:'◇',time:8,tag:'Cómo se mueve la energía',
 summary:'Cardinal, fijo y mutable describen tres maneras simbólicas de encarar el cambio: iniciar, sostener o adaptar.',
 sections:[
 ['Los tres ritmos','Los cardinales suelen representar comienzo e iniciativa; los fijos, continuidad y resistencia a los cambios; los mutables, flexibilidad y transición. Cada modalidad contiene cuatro signos, uno por elemento. Junto con el elemento, ayuda a diferenciar signos que parecen similares.'],
 ['Clasificación completa','Cardinales: Aries, Cáncer, Libra y Capricornio. Fijos: Tauro, Leo, Escorpio y Acuario. Mutables: Géminis, Virgo, Sagitario y Piscis. Aries y Leo son de Fuego, pero Aries es cardinal y Leo fijo: uno se interpreta como arranque y el otro como sostén.']
 ],keys:['Cardinal = iniciar.','Fijo = sostener.','Mutable = adaptarse.','Cada signo combina un elemento y una modalidad.'],
 example:'Ante un proyecto nuevo, una lectura astrológica imaginaría a Aries dando el primer paso, Tauro sosteniendo el esfuerzo y Virgo ajustando el método.',
 memory:'Arrancar, mantener, ajustar: cardinal, fijo, mutable.',
 challenge:'Elegí tu signo solar y anotá su combinación de elemento y modalidad.',
 flashQ:'¿Qué modalidad tiene Virgo?',flashA:'Mutable. Virgo combina Tierra y modalidad mutable.',
 quiz:{q:'¿Qué modalidad se asocia con sostener y perseverar?',a:['Mutable','Fija','Cardinal'],correct:1,why:'La modalidad fija simboliza continuidad y estabilidad.'}
},
{
 title:'Los planetas y sus significados',symbol:'☉',time:11,tag:'Los protagonistas',
 summary:'Los planetas indican el “qué”: la función o tema que se está interpretando.',
 sections:[
 ['Planetas personales','Sol: identidad y vitalidad. Luna: necesidades emocionales y hábitos. Mercurio: pensamiento y comunicación. Venus: vínculos, placer y valores. Marte: acción, deseo y forma de defenderse. En astrología también se llama “planetas” al Sol y la Luna por tradición, aunque astronómicamente son una estrella y un satélite natural.'],
 ['Planetas sociales y transpersonales','Júpiter se asocia con expansión y creencias; Saturno con límites y responsabilidad; Urano con innovación y ruptura; Neptuno con imaginación y disolución de límites; Plutón con transformación y poder. Plutón es un planeta enano según la astronomía actual. Los planetas lentos pasan muchos años en un signo y suelen interpretarse también de forma generacional.']
 ],keys:['Los planetas son funciones, no signos.','Personales: Sol, Luna, Mercurio, Venus y Marte.','Sociales: Júpiter y Saturno.','Transpersonales: Urano, Neptuno y Plutón.'],
 example:'Mercurio en Géminis se interpretaría como una comunicación rápida y curiosa; Marte en Géminis, como una forma de actuar a través de ideas y debates.',
 memory:'Planeta = actor. Signo = estilo. Casa = escenario.',
 challenge:'Asociá Mercurio, Venus, Marte y Saturno con una palabra propia antes de continuar.',
 flashQ:'¿Qué planeta se asocia con la comunicación?',flashA:'Mercurio.',
 quiz:{q:'¿Qué función representa Marte en astrología?',a:['Acción y deseo','Comunicación','Necesidades emocionales'],correct:0,why:'Marte simboliza la iniciativa, el impulso y la forma de actuar.'}
},
{
 title:'Regencias planetarias',symbol:'♄',time:9,tag:'Quién gobierna a quién',
 summary:'Cada signo se vincula con uno o varios planetas llamados regentes. Hay regencias tradicionales y modernas.',
 sections:[
 ['La idea de regencia','Una regencia es una asociación simbólica entre planeta y signo. En el esquema tradicional: Marte rige Aries y Escorpio; Venus, Tauro y Libra; Mercurio, Géminis y Virgo; Luna, Cáncer; Sol, Leo; Júpiter, Sagitario y Piscis; Saturno, Capricornio y Acuario.'],
 ['Tradición y modernidad','Con el descubrimiento de otros planetas, algunos enfoques modernos incorporaron a Urano como regente de Acuario, Neptuno de Piscis y Plutón de Escorpio. No todas las escuelas coinciden. Conocer ambas propuestas te evita confusiones cuando compares interpretaciones.']
 ],keys:['Regente = planeta asociado a un signo.','Mercurio rige Géminis y Virgo.','Venus rige Tauro y Libra.','Hay diferencias entre escuelas tradicionales y modernas.'],
 example:'Dos astrólogos pueden coincidir en que Saturno es regente tradicional de Acuario, pero uno de ellos puede usar también a Urano como regente moderno.',
 memory:'Leo tiene Sol; Cáncer tiene Luna. Son las dos regencias más fáciles de recordar.',
 challenge:'Identificá los regentes tradicionales de Virgo, Leo, Libra y Piscis.',
 flashQ:'¿Cuál es el regente tradicional de Piscis?',flashA:'Júpiter. En astrología moderna también se usa Neptuno.',
 quiz:{q:'¿Qué planeta rige tradicionalmente Virgo?',a:['Venus','Mercurio','Saturno'],correct:1,why:'Mercurio es regente tradicional de Virgo y Géminis.'}
},
{
 title:'Qué es una carta natal',symbol:'✺',time:10,tag:'Un mapa del momento',
 summary:'La carta natal es un mapa simbólico del cielo para una fecha, hora y lugar de nacimiento.',
 sections:[
 ['Cómo se construye','Se calculan las posiciones astronómicas aparentes del Sol, la Luna y los planetas en un momento determinado, y se representan sobre un círculo zodiacal. Luego se agregan las casas y los ángulos, que dependen del lugar y de la hora. Por eso una hora aproximada puede modificar el ascendente y las casas.'],
 ['Cómo se lee','La carta combina cuatro capas: planetas (qué), signos (cómo), casas (dónde) y aspectos (cómo se relacionan). No es una foto literal del espacio: es una representación geométrica vista desde la Tierra. Tampoco puede probar características personales ni anticipar hechos de manera científica.']
 ],keys:['Fecha, hora y lugar permiten calcular la carta.','La hora afecta especialmente casas y ascendente.','Planetas, signos, casas y aspectos forman el lenguaje básico.','Es un mapa simbólico, no un diagnóstico.'],
 example:'Dos personas nacidas el mismo día pueden compartir posiciones planetarias, pero tener diferentes ascendentes y casas si nacieron a distintas horas o lugares.',
 memory:'Una carta natal es como un mapa con actores, estilos, escenarios y relaciones.',
 challenge:'Dibujá un círculo con 12 divisiones e imaginá dónde colocarías el Sol y la Luna. No necesitás conocer tu hora de nacimiento todavía.',
 flashQ:'¿Qué tres datos se usan para calcular una carta natal?',flashA:'Fecha, hora y lugar de nacimiento.',
 quiz:{q:'¿Qué dato es especialmente importante para calcular el ascendente?',a:['La hora de nacimiento','El nombre','La estación actual'],correct:0,why:'El ascendente depende de la rotación terrestre y cambia durante el día.'}
},
{
 title:'Sol, Luna y Ascendente',symbol:'☾',time:11,tag:'Los famosos tres grandes',
 summary:'El Sol, la Luna y el Ascendente suelen ser la puerta de entrada para interpretar una carta natal.',
 sections:[
 ['Tres preguntas diferentes','El Sol se interpreta como identidad consciente, propósito y expresión vital. La Luna se asocia con reacciones afectivas, seguridad y necesidades íntimas. El Ascendente es el signo que aparecía por el horizonte oriental al nacer y suele asociarse con la manera de abordar la vida y de presentarse.'],
 ['No son tres personalidades aisladas','En una lectura se integran, no se compite por “cuál sos de verdad”. Una persona con Sol de Tierra, Luna de Fuego y Ascendente de Aire puede leerse como alguien orientado a lo práctico, emocionalmente impulsivo y socialmente curioso. Es una metáfora interpretativa, no una evaluación psicológica validada.']
 ],keys:['Sol: identidad y voluntad.','Luna: mundo emocional y necesidades.','Ascendente: modo de entrar en el mundo.','La hora de nacimiento define el ascendente.'],
 example:'Sol en Capricornio, Luna en Cáncer y Ascendente en Géminis: la lectura podría juntar búsqueda de estructura, sensibilidad afectiva y curiosidad en la primera impresión.',
 memory:'Sol = quién quiero ser. Luna = qué necesito. Ascendente = cómo empiezo.',
 challenge:'Escribí una frase para cada uno: “Mi Sol representa…”, “Mi Luna representa…”, “Mi Ascendente representa…”.',
 flashQ:'¿Qué es el Ascendente desde el punto de vista geométrico?',flashA:'El punto del zodíaco que ascendía por el horizonte este al momento de nacer.',
 quiz:{q:'¿Qué componente se relaciona especialmente con las necesidades emocionales?',a:['Medio Cielo','Luna','Marte'],correct:1,why:'La Luna se asocia tradicionalmente con la seguridad y el mundo emocional.'}
},
{
 title:'Las 12 casas astrológicas',symbol:'⌂',time:12,tag:'Los escenarios de la vida',
 summary:'Las casas distribuyen la carta en doce áreas simbólicas de experiencia. No son lo mismo que los signos.',
 sections:[
 ['De la 1 a la 6','Casa 1: identidad y presentación; 2: recursos y valores; 3: comunicación y entorno; 4: hogar y raíces; 5: creatividad y disfrute; 6: rutinas, trabajo cotidiano y hábitos. Cada casa se interpreta como el escenario donde se expresa una posición planetaria.'],
 ['De la 7 a la 12','Casa 7: pareja y asociaciones; 8: recursos compartidos y transformaciones; 9: estudios, viajes y visión del mundo; 10: vocación y proyección pública; 11: amistades, redes y proyectos colectivos; 12: retiro, mundo interior y asuntos invisibles. Existen varios sistemas de división de casas, por lo que las cúspides pueden variar.']
 ],keys:['Los signos hablan de estilo; las casas, de ámbitos.','Hay doce casas y cada una tiene un campo simbólico.','Casa 4: hogar; casa 7: vínculos; casa 10: carrera.','Distintos sistemas de casas dan resultados diferentes.'],
 example:'Venus en casa 7 pone el símbolo de los vínculos en el escenario de las asociaciones; Venus en casa 10 lo relaciona más con la vida pública y profesional.',
 memory:'1 = yo, 4 = hogar, 7 = otros, 10 = mundo público: las cuatro esquinas de la carta.',
 challenge:'Elegí tres casas y escribí una situación de la vida cotidiana que podría asociarse con cada una.',
 flashQ:'¿Cuál es la casa tradicional de pareja y asociaciones?',flashA:'La casa 7.',
 quiz:{q:'¿Qué casa se vincula principalmente con vocación y proyección pública?',a:['Casa 3','Casa 10','Casa 6'],correct:1,why:'La casa 10 está relacionada con trayectoria y reconocimiento social.'}
},
{
 title:'Signo solar, lunar y ascendente',symbol:'☼',time:9,tag:'No sos solamente tu signo',
 summary:'Una misma persona tiene diferentes signos asociados a distintas partes de su carta natal.',
 sections:[
 ['Tres cálculos distintos','El signo solar depende de dónde estaba el Sol cuando naciste; cambia aproximadamente una vez por mes. El signo lunar depende de la posición de la Luna, que cambia de signo cada 2 a 3 días. El ascendente depende de qué signo cruzaba el horizonte este y puede cambiar aproximadamente cada dos horas, según latitud y época.'],
 ['Por qué el horóscopo popular simplifica','Los horóscopos generales suelen usar solo el signo solar. Eso permite escribir para doce grupos enormes de personas, pero pierde las particularidades que la astrología atribuye a las demás posiciones. Incluso entre astrólogos hay diferencias sobre cómo priorizar Sol, Luna y Ascendente.']
 ],keys:['Sol: cambia de signo aproximadamente cada mes.','Luna: cambia de signo cada 2 a 3 días.','Ascendente: cambia relativamente rápido durante el día.','Compartir signo solar no equivale a tener la misma carta.'],
 example:'Dos hermanos que nacen con diez horas de diferencia pueden compartir Sol y Luna y tener ascendentes distintos.',
 memory:'El Sol marca el mes; la Luna, unos días; el Ascendente, unas horas.',
 challenge:'Explicale a alguien en dos frases por qué “ser de Aries” no describe toda una carta natal.',
 flashQ:'¿Cuál de estos cambia de signo más rápido, en general?',flashA:'El ascendente, porque depende de la rotación de la Tierra.',
 quiz:{q:'¿Cada cuánto suele cambiar de signo la Luna?',a:['Cada 2 o 3 días','Cada 2 o 3 meses','Una vez por año'],correct:0,why:'La Luna recorre el zodíaco en unos 27 días, así que pasa pocos días en cada signo.'}
},
{
 title:'Medio Cielo y Fondo del Cielo',symbol:'↟',time:10,tag:'Los dos ejes verticales',
 summary:'El Medio Cielo (MC) y el Fondo del Cielo (IC) son puntos angulares usados para hablar de vida pública y raíces privadas.',
 sections:[
 ['El punto alto y el punto bajo','El MC es la intersección de la eclíptica con el meridiano superior; el IC es el punto opuesto. Simbólicamente, el Medio Cielo se relaciona con vocación, reputación y proyección, mientras que el Fondo del Cielo se asocia con hogar, orígenes y vida íntima.'],
 ['Una diferencia técnica importante','En muchos sistemas de casas el MC coincide con la cúspide de la casa 10 y el IC con la cúspide de la 4. Pero no todos los sistemas funcionan así: por ejemplo, en casas por signo entero pueden ubicarse dentro de otras casas. Aprendé primero el simbolismo y después los matices técnicos.']
 ],keys:['MC: vida pública, vocación y reputación.','IC: raíces, hogar y mundo íntimo.','Son puntos opuestos de la carta.','No siempre equivalen a las cúspides de casas 10 y 4.'],
 example:'Una interpretación puede mirar los planetas cerca del MC para hablar de la imagen profesional y cerca del IC para temas familiares.',
 memory:'MC mira hacia afuera; IC mira hacia adentro.',
 challenge:'Pensá en una meta profesional y en un valor familiar. ¿Cómo separarías los dos escenarios simbólicos?',
 flashQ:'¿Qué significan las siglas MC e IC?',flashA:'Medio Cielo (Medium Coeli) y Fondo del Cielo (Imum Coeli).',
 quiz:{q:'¿Cuál de estos puntos se asocia con las raíces y el hogar?',a:['IC','MC','Descendente'],correct:0,why:'El IC representa simbólicamente el ámbito íntimo y los orígenes.'}
},
{
 title:'Aspectos planetarios',symbol:'✳',time:10,tag:'La geometría de las relaciones',
 summary:'Un aspecto es una distancia angular entre dos puntos de la carta; la astrología le asigna un significado.',
 sections:[
 ['Cómo se miden','Imaginá un círculo de 360°. Si dos planetas están separados por 90°, forman una cuadratura; si están separados por 120°, un trígono. Los aspectos más enseñados son conjunción, oposición, cuadratura, trígono y sextil. Se calculan por longitud eclíptica, no por la distancia real entre planetas en el espacio.'],
 ['Orbe y contexto','Casi nunca se exige un ángulo absolutamente exacto: se acepta una tolerancia llamada orbe. El margen depende del aspecto, de los planetas y de la escuela. Un aspecto no se interpreta solo: se consideran las funciones de los planetas, los signos y las casas involucrados.']
 ],keys:['Aspecto = ángulo entre posiciones zodiacales.','El círculo completo tiene 360°.','Los aspectos tienen un margen llamado orbe.','El mismo aspecto cambia de lectura según los planetas.'],
 example:'Si el Sol está a 10° de Aries y Marte a 10° de Cáncer, están separados por unos 90°: una cuadratura.',
 memory:'Pensá en una conversación: los planetas son quienes hablan y el aspecto describe la dinámica entre ellos.',
 challenge:'Dibujá un círculo y marcá dos puntos a 180°. Después ubicá otro a 90° del primero.',
 flashQ:'¿Cómo se llama la tolerancia alrededor de un ángulo exacto?',flashA:'Orbe.',
 quiz:{q:'¿Qué es un aspecto astrológico?',a:['Un elemento zodiacal','Una distancia angular entre posiciones','Un tipo de casa'],correct:1,why:'Los aspectos se definen por separaciones angulares en la rueda zodiacal.'}
},
{
 title:'La conjunción (0°)',symbol:'◎',time:8,tag:'Dos voces juntas',
 summary:'Una conjunción ocurre cuando dos cuerpos tienen posiciones zodiacales cercanas: sus significados se interpretan mezclados.',
 sections:[
 ['Cercanía en longitud','Una conjunción exacta corresponde a 0° de separación zodiacal. La tolerancia depende del orbe usado. No significa que ambos planetas estén físicamente pegados en el espacio: pueden estar a enormes distancias en profundidad.'],
 ['¿Buena o mala? Depende','La conjunción intensifica o fusiona funciones. Venus con Mercurio suele leerse como comunicación agradable o estética; Marte con Saturno puede interpretarse como tensión entre impulso y freno, o disciplina aplicada a la acción. Ninguna conjunción tiene un único significado fijo.']
 ],keys:['Conjunción exacta: 0°.','Fusiona o concentra significados.','No implica cercanía física real.','Su interpretación depende de los planetas.'],
 example:'Sol conjunto a Mercurio: una lectura puede conectar identidad personal y manera de pensar o comunicar.',
 memory:'Conjunción = dos instrumentos tocando una melodía compartida.',
 challenge:'Inventá una frase que combine Venus (vínculos) con Marte (acción) en una conjunción.',
 flashQ:'¿Cuál es el ángulo de la conjunción exacta?',flashA:'0°.',
 quiz:{q:'¿Qué suele simbolizar una conjunción?',a:['Separación de 180°','Fusión o concentración de funciones','Ausencia de relación'],correct:1,why:'La cercanía zodiacal hace que ambos significados se lean conjuntamente.'}
},
{
 title:'La oposición (180°)',symbol:'↔',time:8,tag:'El arte del equilibrio',
 summary:'Una oposición coloca dos posiciones en puntos opuestos del zodíaco, y suele leerse como polaridad.',
 sections:[
 ['Dos extremos de un mismo eje','La oposición exacta separa dos cuerpos por 180°. Tradicionalmente se asocia con contrastes, proyecciones y necesidad de negociar entre polos. No indica necesariamente conflicto real; también puede sugerir complementariedad.'],
 ['Ejes zodiacales','Los signos opuestos forman pares: Aries-Libra, Tauro-Escorpio, Géminis-Sagitario, Cáncer-Capricornio, Leo-Acuario y Virgo-Piscis. Una oposición entre planetas puede unir signos distintos dentro de esos ejes cuando se considera el orbe.']
 ],keys:['Oposición exacta: 180°.','Se interpreta como polaridad o tensión.','Puede sugerir complementariedad.','Los signos opuestos están en el mismo eje zodiacal.'],
 example:'Sol en Aries frente a Luna en Libra puede leerse como un diálogo entre autonomía y cooperación.',
 memory:'Oposición = dos personas frente a frente en una mesa: necesitan escucharse.',
 challenge:'Elegí un eje (por ejemplo, Aries-Libra) y escribí un equilibrio posible entre sus temas.',
 flashQ:'¿Cuál es el signo opuesto a Virgo?',flashA:'Piscis.',
 quiz:{q:'¿Cuántos grados tiene una oposición exacta?',a:['90°','120°','180°'],correct:2,why:'La mitad de una circunferencia completa, 360° / 2, es 180°.'}
},
{
 title:'La cuadratura (90°)',symbol:'□',time:8,tag:'El desafío que empuja',
 summary:'La cuadratura se asocia tradicionalmente con fricción, desafíos y necesidad de actuar para integrar dos funciones.',
 sections:[
 ['Un ángulo recto','La cuadratura exacta es de 90°. En interpretaciones clásicas y modernas suele considerarse un aspecto tenso. Eso no significa que “algo malo vaya a pasar”: el lenguaje astrológico usa la tensión como metáfora de esfuerzo y crecimiento.'],
 ['Conflicto productivo','Cuando dos funciones tiran en direcciones distintas, la lectura propone buscar estrategias para coordinarlas. Con Sol y Saturno, por ejemplo, puede hablarse de identidad frente a responsabilidad; con Venus y Marte, de afecto frente a impulso.']
 ],keys:['Cuadratura exacta: 90°.','Se asocia con tensión o desafío.','No predice un desastre.','La interpretación depende del par de planetas.'],
 example:'Luna en Aries y Saturno en Cáncer, ambos a 15° de sus signos, forman una cuadratura exacta.',
 memory:'Cuadratura = una esquina: para seguir avanzando, hay que doblar.',
 challenge:'Transformá una supuesta “tensión” en una pregunta práctica: ¿cómo combinarías emoción y disciplina?',
 flashQ:'¿Qué ángulo forma una cuadratura?',flashA:'90°.',
 quiz:{q:'En lenguaje astrológico, una cuadratura suele vincularse con…',a:['Tensión y esfuerzo','Fusión completa','180° de separación'],correct:0,why:'La cuadratura es el aspecto de 90° tradicionalmente asociado con desafíos.'}
},
{
 title:'El trígono (120°)',symbol:'△',time:8,tag:'Cuando todo fluye',
 summary:'El trígono suele interpretarse como afinidad, facilidad y cooperación espontánea entre dos funciones.',
 sections:[
 ['Una tercera parte del círculo','El trígono exacto equivale a 120°, porque 360° dividido tres da 120°. En el esquema elemental, los signos del mismo elemento suelen formar trígonos entre sí: por ejemplo Aries, Leo y Sagitario.'],
 ['Facilidad no es garantía','En astrología moderna suele considerarse “armónico”, pero eso no garantiza resultados ni elimina la necesidad de esfuerzo. Algunas escuelas incluso advierten que demasiada facilidad simbólica podría traducirse en comodidad o falta de iniciativa.']
 ],keys:['Trígono exacto: 120°.','Suele unir signos de un mismo elemento.','Se interpreta como armonía o facilidad.','No garantiza éxito concreto.'],
 example:'Mercurio en Géminis y Saturno en Libra, ubicados en el mismo grado de sus signos, forman un trígono de Aire.',
 memory:'Trígono = tres puntos equilibrados alrededor de un círculo.',
 challenge:'Buscá los otros dos signos del mismo elemento que Leo y verificá qué ángulo aproximado forman.',
 flashQ:'¿Qué ángulo tiene un trígono exacto?',flashA:'120°.',
 quiz:{q:'¿Qué pareja de signos pertenece al mismo elemento y puede formar trígono?',a:['Aries y Leo','Tauro y Géminis','Cáncer y Libra'],correct:0,why:'Aries y Leo son de Fuego y están separados por cuatro signos, equivalentes a 120°.'}
},
{
 title:'El sextil (60°)',symbol:'✶',time:8,tag:'La oportunidad de colaborar',
 summary:'El sextil simboliza una relación favorable que suele requerir participación consciente para aprovecharse.',
 sections:[
 ['Sesenta grados','El sextil exacto es de 60°, una sexta parte del círculo. Aparece habitualmente entre signos de elementos compatibles: Fuego con Aire o Tierra con Agua, como Aries-Géminis o Tauro-Cáncer.'],
 ['Potencial y acción','A diferencia del trígono, que suele describirse como una facilidad más natural, el sextil se interpreta a menudo como una oportunidad que necesita un pequeño esfuerzo para desplegarse. Es una convención de lectura, no una fuerza física.']
 ],keys:['Sextil exacto: 60°.','Suele asociarse con oportunidades y cooperación.','Fuego-Aire y Tierra-Agua son combinaciones típicas.','El contexto de la carta es fundamental.'],
 example:'Venus en Tauro y Júpiter en Cáncer, en grados próximos, pueden formar un sextil que se leería como cooperación entre afecto y expansión.',
 memory:'Sextil = seis partes del círculo; cada una mide 60°.',
 challenge:'Sin mirar, ordená estos aspectos de menor a mayor ángulo: oposición, sextil, trígono, cuadratura, conjunción.',
 flashQ:'¿Cuál es el ángulo de un sextil?',flashA:'60°.',
 quiz:{q:'¿Cuál de estos aspectos mide 60°?',a:['Trígono','Sextil','Oposición'],correct:1,why:'El sextil es la sexta parte de un círculo de 360°.'}
},
{
 title:'Movimiento directo y retrógrado',symbol:'↺',time:11,tag:'El gran efecto óptico',
 summary:'Un planeta retrógrado parece retroceder frente al fondo de estrellas visto desde la Tierra; no invierte realmente su órbita.',
 sections:[
 ['Qué ocurre en astronomía','Las diferentes velocidades orbitales y la perspectiva terrestre hacen que la posición aparente de ciertos planetas cambie de dirección durante un tiempo. Es comparable a adelantar a otro vehículo: parece retroceder respecto del fondo aunque siga avanzando. “Directo” es el movimiento aparente habitual hacia adelante en el zodíaco.'],
 ['Qué se interpreta en astrología','Las escuelas astrológicas suelen relacionar la retrogradación con revisión, introspección y temas que se reevalúan. Mercurio retrógrado es famoso por asociarse popularmente con fallas de comunicación, pero no hay evidencia científica de que provoque problemas tecnológicos ni conflictos.']
 ],keys:['Directo = movimiento aparente habitual.','Retrógrado = retroceso aparente, no real.','Es un fenómeno de perspectiva.','La interpretación astrológica es simbólica.'],
 example:'Cuando Mercurio pasa de movimiento directo a retrógrado, no frena su órbita solar; cambia la dirección de su desplazamiento aparente observado desde la Tierra.',
 memory:'Retrógrado no significa “marcha atrás del planeta”, sino “marcha atrás en nuestro mapa del cielo”.',
 challenge:'Explicá el movimiento retrógrado usando el ejemplo de dos autos que circulan a velocidades distintas.',
 flashQ:'¿Un planeta retrógrado invierte físicamente su órbita?',flashA:'No. El retroceso es aparente, por la geometría del movimiento relativo.',
 quiz:{q:'¿Qué es realmente el movimiento retrógrado?',a:['Una inversión física de la órbita','Un movimiento aparente visto desde la Tierra','Un eclipse parcial'],correct:1,why:'La retrogradación es un cambio de dirección aparente en el cielo.'}
},
{
 title:'Las estaciones planetarias',symbol:'⏸',time:8,tag:'El instante del cambio',
 summary:'Antes de pasar de directo a retrógrado, o viceversa, un planeta parece reducir su velocidad aparente hasta casi detenerse.',
 sections:[
 ['Estacionario retrógrado y directo','Se llama estación retrógrada al momento en que comienza el tramo aparente hacia atrás, y estación directa a aquel en que vuelve al movimiento aparente habitual. No hay detención física: es la velocidad angular proyectada sobre el cielo la que se acerca a cero.'],
 ['El significado simbólico','Muchos astrólogos consideran que una estación resalta el tema de ese planeta y funciona como un punto de inflexión. Otros prestan atención al período completo, no solo al día exacto. Son tradiciones interpretativas sin validación causal.']
 ],keys:['Estación = cambio de dirección aparente.','Puede ser hacia retrógrado o hacia directo.','El planeta no se detiene en el espacio.','Se suele asociar con un punto de inflexión.'],
 example:'Mercurio directo → estación retrógrada → Mercurio retrógrado → estación directa → Mercurio directo.',
 memory:'Un tren en pantalla que parece parar antes de cambiar de sentido, aunque el tren real siga circulando.',
 challenge:'Dibujá una línea de tiempo con las cinco etapas del ejemplo y señalá las dos estaciones.',
 flashQ:'¿Cómo se llama el cambio de retrógrado a directo?',flashA:'Estación directa.',
 quiz:{q:'¿Qué indica una estación planetaria?',a:['Un cambio de dirección aparente','Una caída del planeta','El comienzo del año'],correct:0,why:'La estación es el instante de transición del movimiento aparente.'}
},
{
 title:'Los tránsitos planetarios',symbol:'◷',time:11,tag:'El cielo de hoy y tu carta',
 summary:'Un tránsito compara la posición actual de un planeta con puntos de una carta natal.',
 sections:[
 ['La comparación de dos mapas','Imaginá una carta natal como una fotografía del cielo de nacimiento. Los planetas siguen moviéndose: sus posiciones actuales pueden formar aspectos con las posiciones natales. A ese vínculo se lo llama tránsito. Su cálculo es astronómico, pero el significado que se le atribuye es astrológico.'],
 ['Planetas rápidos y lentos','La Luna atraviesa signos rápidamente, así que sus tránsitos duran poco. Saturno y los planetas exteriores se mueven más despacio y sus tránsitos suelen recibir lecturas de largo plazo. Para interpretarlos se observa el planeta transitante, el planeta natal afectado, el aspecto y las casas implicadas.']
 ],keys:['Tránsito = cielo actual comparado con carta natal.','Se estudian aspectos entre posiciones actuales y natales.','Los planetas lentos generan ciclos más largos.','No permite predecir eventos de forma científicamente fiable.'],
 example:'Si Saturno en tránsito forma una cuadratura con el Sol natal, una lectura simbólica podría hablar de revisar compromisos e identidad.',
 memory:'Carta natal = mapa base. Tránsitos = movimiento sobre ese mapa.',
 challenge:'Escribí qué información necesitarías para saber si Venus está haciendo un tránsito a tu Mercurio natal.',
 flashQ:'¿Qué dos cosas compara un tránsito?',flashA:'La posición actual de un cuerpo y una posición de la carta natal.',
 quiz:{q:'¿Qué se compara al hablar de tránsitos?',a:['Dos personas distintas','El cielo actual y una carta natal','Dos elementos de un signo'],correct:1,why:'Los tránsitos se calculan sobre una carta natal como referencia.'}
},
{
 title:'Luna nueva y Luna llena',symbol:'◑',time:10,tag:'Dos momentos del ciclo lunar',
 summary:'Las fases lunares son configuraciones geométricas reales; la astrología les asigna narrativas simbólicas.',
 sections:[
 ['La mecánica astronómica','En Luna nueva, las longitudes geocéntricas aparentes del Sol y la Luna son casi iguales (conjunción). En Luna llena, se encuentran aproximadamente opuestas (180°). El ciclo de una Luna nueva a la siguiente, llamado mes sinódico, dura en promedio unos 29,5 días.'],
 ['Simbolismo de cada fase','La astrología contemporánea suele asociar la Luna nueva con comienzos, intención y siembra; la Luna llena con culminación, visibilidad y evaluación. No hay evidencia de que una fase determine decisiones o acontecimientos personales. Puede usarse, si te sirve, como un ritual de reflexión.']
 ],keys:['Luna nueva ≈ conjunción Sol-Luna.','Luna llena ≈ oposición Sol-Luna.','El ciclo completo dura unos 29,5 días.','Inicio y culminación son asociaciones simbólicas.'],
 example:'Usar cada Luna nueva para elegir un hábito y cada Luna llena para revisar su progreso puede ser una práctica personal, aunque no dependa de una fuerza astrológica.',
 memory:'Nueva: comenzar. Llena: observar lo que creció.',
 challenge:'Anotá una intención simple para las próximas semanas y una manera objetiva de medirla.',
 flashQ:'¿Qué aspecto Sol-Luna corresponde aproximadamente a la Luna llena?',flashA:'Oposición, alrededor de 180°.',
 quiz:{q:'¿Cuánto dura aproximadamente el ciclo de Luna nueva a Luna nueva?',a:['7 días','29,5 días','365 días'],correct:1,why:'El mes sinódico lunar tiene una duración media de 29,53 días.'}
},
{
 title:'Los eclipses',symbol:'◉',time:10,tag:'Cuando se alinean las órbitas',
 summary:'Los eclipses ocurren por alineaciones reales del Sol, la Tierra y la Luna cerca de los nodos lunares.',
 sections:[
 ['Por qué no hay eclipse todos los meses','Un eclipse solar ocurre cuando la Luna se interpone entre el Sol y la Tierra durante una Luna nueva; uno lunar, cuando la Tierra proyecta su sombra sobre la Luna durante una Luna llena. La órbita lunar está inclinada unos 5° respecto de la eclíptica, así que debe haber una alineación próxima a sus nodos.'],
 ['La interpretación astrológica','Los nodos lunares son puntos geométricos donde se cruzan los planos orbitales. Algunas escuelas asocian los eclipses con transiciones o momentos de cambio, especialmente en las casas donde caen. Sin embargo, esos significados no son predicciones científicamente verificadas. Nunca mires directamente un eclipse solar sin protección certificada adecuada.']
 ],keys:['Solar: Luna entre Sol y Tierra.','Lunar: Tierra entre Sol y Luna.','Se producen cerca de los nodos lunares.','No toda Luna nueva o llena genera eclipse.'],
 example:'Una Luna nueva puede no causar eclipse porque la Luna pasa por encima o por debajo de la línea exacta de alineación.',
 memory:'Para un eclipse no alcanza la fase: también importa la inclinación de la órbita.',
 challenge:'Explicá en una frase por qué hay muchas Lunas nuevas pero pocos eclipses solares.',
 flashQ:'¿Qué son los nodos lunares?',flashA:'Los dos puntos donde la órbita de la Luna cruza el plano de la eclíptica.',
 quiz:{q:'¿Por qué no hay eclipse solar en cada Luna nueva?',a:['Porque la órbita lunar está inclinada','Porque el Sol cambia de tamaño','Porque Mercurio está retrógrado'],correct:0,why:'La Luna no siempre pasa por la alineación precisa necesaria.'}
},
{
 title:'El retorno de Saturno',symbol:'♄',time:11,tag:'Un ciclo de casi 30 años',
 summary:'El retorno de Saturno sucede cuando Saturno vuelve aproximadamente a la longitud zodiacal que ocupaba al nacer.',
 sections:[
 ['Qué pasa astronómicamente','Saturno tarda unos 29,5 años terrestres en completar su órbita solar. Por eso, la primera vuelta a su posición natal ocurre aproximadamente entre los 28 y 30 años; la segunda cerca de los 58 y 60. La retrogradación aparente puede hacer que haya varios contactos exactos durante el mismo período.'],
 ['La lectura simbólica','En astrología se lo asocia con madurez, responsabilidades, límites y revisión de estructuras vitales. Es común oír que “marca la adultez”, pero no se puede atribuir a Saturno la causa de las experiencias que ocurren en esas edades. Es una coincidencia de ciclo celeste y etapa de vida interpretada simbólicamente.']
 ],keys:['Saturno tarda unos 29,5 años en completar su órbita.','Primer retorno: cerca de los 29 años.','Segundo retorno: cerca de los 59 años.','Se relaciona simbólicamente con responsabilidad y límites.'],
 example:'Una persona de 29 años podría usar el tema “límites y compromisos” como disparador para evaluar trabajo, relaciones o prioridades, sin creer que Saturno determine esos hechos.',
 memory:'Saturno = estructura; retorno = revisión de la estructura.',
 challenge:'Anotá una responsabilidad que hoy elegís sostener y otra que quizás conviene revisar.',
 flashQ:'¿A qué edad suele ocurrir el primer retorno de Saturno?',flashA:'Aproximadamente a los 29 años.',
 quiz:{q:'¿Aproximadamente cuánto tarda Saturno en orbitar el Sol?',a:['12 años','29,5 años','84 años'],correct:1,why:'Su período orbital es de unas 29,5 vueltas de la Tierra alrededor del Sol.'}
},
{
 title:'Dignidades planetarias',symbol:'♕',time:12,tag:'El contexto cambia la lectura',
 summary:'Las dignidades describen la relación tradicional entre un planeta y el signo en el que se encuentra.',
 sections:[
 ['Cuatro términos clave','Domicilio: signo que el planeta rige. Exaltación: signo donde la tradición le atribuye una posición especial. Exilio o detrimento: signo opuesto a su domicilio. Caída: signo opuesto a su exaltación. Son valoraciones convencionales dentro de sistemas históricos, no mediciones físicas de poder.'],
 ['Un ejemplo con Venus','Venus tiene domicilio en Tauro y Libra; exaltación tradicional en Piscis; detrimento en Aries y Escorpio; caída en Virgo. Una interpretación cuidadosa no concluye que Venus en Virgo sea “malo” para el amor: combina la convención con signos, casas y aspectos. También hay dignidades menores, como triplicidades, términos y decanatos.']
 ],keys:['Domicilio: signo regido por el planeta.','Exaltación: posición privilegiada tradicional.','Detrimento: opuesto al domicilio.','Caída: opuesto a la exaltación.'],
 example:'Mercurio en Virgo se considera en domicilio en la astrología tradicional, una forma de decir que el simbolismo de Mercurio encaja bien con el de Virgo.',
 memory:'Domicilio = en casa; exilio = lejos de casa. Son imágenes simbólicas.',
 challenge:'Buscá una regencia del día 5 e imaginá su signo opuesto: ese será un ejemplo de detrimento.',
 flashQ:'¿Cómo se llama el estado de un planeta en el signo que rige?',flashA:'Domicilio.',
 quiz:{q:'¿Qué significa “domicilio” en dignidades astrológicas?',a:['Planeta en el signo que rige','Planeta en la casa 4','Planeta estacionario'],correct:0,why:'El domicilio es una relación planeta-signo, no una casa astrológica.'}
},
{
 title:'Leer una carta natal completa',symbol:'❂',time:14,tag:'La síntesis de todo',
 summary:'Interpretar una carta no es sumar frases sueltas: es relacionar funciones, estilos, escenarios y geometría.',
 sections:[
 ['Un orden posible de lectura','Primero observá los ángulos y las luminarias (Sol y Luna), después los planetas personales y la distribución por elementos y modalidades. Ubicá cada planeta por signo y casa. Finalmente, mirá aspectos repetidos y temas que aparecen varias veces. La síntesis debe ser coherente y evitar afirmaciones absolutas.'],
 ['Evitar la lectura mecánica','Un trígono no significa “todo irá bien”, ni una cuadratura “algo malo va a ocurrir”. Tampoco existe una combinación que revele una enfermedad, una infidelidad o una fecha de muerte. La buena lectura dentro de esta tradición reconoce múltiples interpretaciones y no reemplaza decisiones informadas.']
 ],keys:['Empezá por Sol, Luna y ángulos.','Leé planeta + signo + casa.','Integrá los aspectos y patrones dominantes.','Evitá predicciones deterministas o diagnósticos.'],
 example:'“Mercurio en Virgo en casa 10 en trígono con Saturno” se podría sintetizar como un estilo de pensamiento analítico aplicado a lo profesional, con afinidad hacia la organización.',
 memory:'Qué (planeta) + cómo (signo) + dónde (casa) + relación (aspecto).',
 challenge:'Construí una interpretación de tres líneas con esta fórmula: Venus + Libra + casa 7 + sextil a Júpiter.',
 flashQ:'¿Qué cuatro capas se integran para leer una posición?',flashA:'Planeta, signo, casa y aspectos.',
 quiz:{q:'¿Qué enfoque es más adecuado para interpretar una carta?',a:['Leer cada palabra como destino seguro','Integrar posiciones, casas y aspectos con contexto','Mirar únicamente el signo solar'],correct:1,why:'La lectura de la carta requiere combinar múltiples elementos sin absolutismos.'}
},
{
 title:'La revolución solar',symbol:'☀',time:10,tag:'Un cumpleaños astronómico',
 summary:'La revolución solar es una carta calculada para el momento en que el Sol vuelve a su longitud zodiacal natal.',
 sections:[
 ['No siempre coincide con el cumpleaños exacto','El Sol retorna anualmente a la posición eclíptica de nacimiento, pero el instante preciso puede ser unas horas antes o después de la hora o fecha de cumpleaños. Una revolución solar toma ese momento y calcula una nueva carta para el año simbólico que comienza.'],
 ['Cómo se interpreta','Se observan ascendente, casas, planetas angulares y vínculos con la carta natal. Diferentes astrólogos usan diferentes lugares de referencia: lugar de nacimiento o lugar donde la persona se encuentra en el retorno. Por eso hay metodologías distintas y no resultados verificables como predicciones científicas.']
 ],keys:['Se calcula cuando el Sol retorna a su longitud natal.','No coincide siempre con la hora exacta de cumpleaños.','Se usa como mapa simbólico de un año.','Hay debates sobre qué lugar usar para calcularla.'],
 example:'Si naciste un 10 de septiembre, tu retorno solar podría ocurrir el 9, 10 u 11 de septiembre de algún año, según el instante astronómico exacto.',
 memory:'Revolución solar = “cumpleaños del Sol” en grados, no en calendario.',
 challenge:'Explicá por qué dos años consecutivos tu retorno solar podría caer a horas diferentes.',
 flashQ:'¿Qué debe volver a su posición natal para una revolución solar?',flashA:'La longitud zodiacal aparente del Sol.',
 quiz:{q:'¿Qué define el instante de una revolución solar?',a:['La medianoche del cumpleaños','El retorno del Sol a su longitud zodiacal natal','La Luna llena más próxima'],correct:1,why:'Se calcula por posición solar, no por fecha civil.'}
},
{
 title:'La sinastría',symbol:'♡',time:11,tag:'Dos mapas que conversan',
 summary:'La sinastría compara posiciones de dos cartas natales para explorar simbólicamente la dinámica entre personas.',
 sections:[
 ['Cómo se superponen dos cartas','Se trazan los planetas de la persona A y los de la persona B, observando aspectos cruzados. Por ejemplo, Venus de A puede estar en trígono al Sol de B; Saturno de B puede formar una cuadratura con la Luna de A. Algunos enfoques también miran en qué casas de una carta caen los planetas de la otra.'],
 ['Compatibilidad sin determinismo','Ningún aspecto demuestra que dos personas sean compatibles o incompatibles. Una buena relación depende de conductas, comunicación, respeto y contexto real. La sinastría puede ser un disparador de conversación o introspección, pero no una razón sólida para iniciar o terminar un vínculo.']
 ],keys:['Compara dos cartas natales.','Busca aspectos entre planetas de personas diferentes.','También puede mirar superposición de casas.','No determina la calidad real de una relación.'],
 example:'Venus de A junto al Mercurio de B podría interpretarse como facilidad para expresar afecto con palabras; no significa que efectivamente se comuniquen bien.',
 memory:'Sinastría = diálogo entre dos mapas, no un veredicto amoroso.',
 challenge:'Inventá una interpretación prudente de Venus de A en sextil al Mercurio de B, usando “podría sugerir…”.',
 flashQ:'¿Qué compara una sinastría?',flashA:'Las posiciones planetarias y aspectos cruzados entre dos cartas natales.',
 quiz:{q:'¿Cuál es el uso más responsable de una sinastría?',a:['Predecir una ruptura con certeza','Explorar símbolos sin sustituir el conocimiento real de la relación','Determinar si alguien es fiel'],correct:1,why:'La sinastría no ofrece predicciones confiables sobre el comportamiento humano.'}
},
{
 title:'Las progresiones secundarias',symbol:'◌',time:11,tag:'Tiempo simbólico',
 summary:'Las progresiones secundarias utilizan una equivalencia simbólica: un día después del nacimiento representa un año de vida.',
 sections:[
 ['La regla día-año','Para estudiar simbólicamente los 30 años de una persona, se observan las posiciones planetarias unos 30 días después de su nacimiento. No significa que esos planetas se muevan de ese modo en la actualidad: es una técnica temporal simbólica distinta de los tránsitos.'],
 ['Qué se observa','La Luna progresada suele recibir especial atención porque cambia de signo y fase en el esquema de progresiones. También se estudian cambios de signo de planetas personales y aspectos progresados. Algunas escuelas difieren en cálculos y prioridades. No hay pruebas científicas que respalden su capacidad predictiva.']
 ],keys:['Regla principal: 1 día = 1 año simbólico.','Se parte de posiciones posteriores al nacimiento.','No es el movimiento actual del cielo.','La Luna progresada suele tener protagonismo.'],
 example:'Para representar simbólicamente la edad de 25 años, se toman posiciones de aproximadamente 25 días después de la fecha natal.',
 memory:'Progresión = reloj simbólico. Tránsito = cielo real de hoy.',
 challenge:'Si una persona tiene 42 años, ¿cuántos días después de su nacimiento observarías según la regla básica?',
 flashQ:'¿Cuál es la equivalencia fundamental de progresiones secundarias?',flashA:'Un día después del nacimiento equivale simbólicamente a un año de vida.',
 quiz:{q:'Para una progresión secundaria a los 20 años, se miran posiciones de…',a:['20 días después de nacer','20 meses después de nacer','20 años antes de nacer'],correct:0,why:'La equivalencia usada es un día por cada año de vida.'}
},
{
 title:'Astrología horaria y electiva',symbol:'✧',time:12,tag:'Preguntar y elegir momentos',
 summary:'La horaria interpreta una carta para una pregunta; la electiva selecciona un momento en función de criterios astrológicos.',
 sections:[
 ['Astrología horaria','En lugar de partir de una fecha de nacimiento, la astrología horaria levanta una carta para el momento en que una pregunta concreta se formula o se comprende, según el método. Se aplican reglas tradicionales sobre regentes, casas, aspectos y condiciones planetarias. Es una práctica adivinatoria, no un procedimiento fiable para comprobar hechos.'],
 ['Astrología electiva','La electiva intenta escoger una fecha y hora propicias para iniciar actividades, como un lanzamiento o una ceremonia. Sus criterios varían según la escuela. Para decisiones importantes, la logística, la evidencia y las necesidades reales deben pesar mucho más que una elección astrológica.']
 ],keys:['Horaria = interpretar una pregunta mediante una carta.','Electiva = elegir un momento mediante una carta.','Ambas utilizan reglas simbólicas tradicionales.','No reemplazan información ni planificación verificable.'],
 example:'Una persona podría usar una carta electiva como ritual para elegir cuándo anunciar un proyecto, pero debería priorizar disponibilidad del equipo y requisitos técnicos.',
 memory:'Horaria pregunta “¿qué pasa?”. Electiva pregunta “¿cuándo conviene?”.',
 challenge:'Escribí una decisión cotidiana y separá criterios verificables de posibles símbolos astrológicos.',
 flashQ:'¿Qué diferencia básica hay entre horaria y electiva?',flashA:'Horaria interpreta preguntas; electiva elige momentos.',
 quiz:{q:'¿Cuál de estas prácticas busca seleccionar un momento de inicio?',a:['Sinastría','Electiva','Progresiones secundarias'],correct:1,why:'La astrología electiva propone momentos simbólicamente propicios para actuar.'}
}
];
