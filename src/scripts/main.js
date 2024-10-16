AOS.init();

const eventDate = new Date('Dec 12, 2024 19:00:00');
const eventTimestamp = eventDate.getTime();

const timeout = setInterval(function() {
    const now = new Date();
    const nowTimestamp = now.getTime();

    const remainingTime = eventTimestamp - nowTimestamp;
    const daysInMs = 1000 * 60 * 60 * 24; //dias em ms
    const hoursInMs = 1000 * 60 * 60; //horas em ms
    const minutesInMs = 1000 * 60; //minutos em ms
    const secondsInMs = 1000; //segundos em ms

    // conversao ms p/ dias
    const daysToEvent = Math.floor(remainingTime / daysInMs);

    // conversao ms p/ dias ('%' = retorna o resto da divisão anterior)
    const hoursToEvent = Math.floor((remainingTime % daysInMs) / hoursInMs);

    // conversao ms p/ minutos
    const minutesToEvent = Math.floor((remainingTime % hoursInMs) / minutesInMs);

    // conversao ms p/ segundos
    const secondsToEvent = Math.floor((remainingTime % minutesInMs) / secondsInMs);

    document.getElementById('timer').innerHTML = `${daysToEvent}d ${hoursToEvent}h ${minutesToEvent}m ${secondsToEvent}s`;

    // caso o evento ja tenha passado
    if (remainingTime < 0) {
        clearInterval(timeout);
        document.getElementById('timer-text').innerHTML = `O maior evento de tecnologia do Brasil já passou! :( Fique de olho em nossas redes sociais para os próximos eventos.`;
        document.getElementById('infos-bar').style.display = 'none'; //oculta o infos-bar
    }

}, 1000);