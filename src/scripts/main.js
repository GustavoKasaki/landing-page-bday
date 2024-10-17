AOS.init();

const eventDate = new Date('Sep 26, 2025 19:00:00');
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

    document.getElementById('timer').innerHTML = `</br>${daysToEvent}d ${hoursToEvent}h ${minutesToEvent}m ${secondsToEvent}s`;

    // caso o evento ja tenha passado
    if (remainingTime < 0) {
        clearInterval(timeout);
        document.getElementById('timer-text').innerHTML = `A festa já passou! :(</br>Mas não desanime, a próxima será melhor e você participará!`;
        document.getElementById('infos-bar').style.display = 'none'; //oculta o infos-bar
    }

}, 1000);