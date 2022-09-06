import config from './config'
import TikTokLiveService from './services/tiktok-live.service'

const initApplication = () => {
    const tiktokService = new TikTokLiveService(config.TIKTOK_USERNAME)
    tiktokService.initConnectionLive();
    tiktokService.initListenChat();
}

initApplication();