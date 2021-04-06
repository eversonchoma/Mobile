import axios from 'Axios';

const api = axios.create({
    baseUrl: 'http://localhost:3333'
});

/**
 * iOS com emulador: localhost
 * iOS com físico: IP da máquina
 * Android com emulador: localhost (adb reverse)
 * Android com emulador: 10.0.2.2 (Android Studio)
 * Android com emulador: 10.0.3.2 (Genymotion)
 * Android com físico: IP da máquina
 */