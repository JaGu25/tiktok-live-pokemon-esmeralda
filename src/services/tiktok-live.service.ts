import { WebcastPushConnection } from 'tiktok-live-connector';
import { CommentTiktok } from '../domain/comment';
import { translateCommentToAction } from './tiktok-translate-comment.service';

class TikTokLiveService {

    username: string;
    liveConnection: WebcastPushConnection;

    constructor(username: string) {
        this.username = username;
        this.liveConnection = {} as WebcastPushConnection;
    }

    initConnectionLive() {
        this.liveConnection = new WebcastPushConnection(this.username);
        this.liveConnection.connect().then(() => {
            console.info(`Connected to roomId`);
        }).catch(err => {
            console.error('Failed to connect', err);
        })
    }

    initListenChat() {
        this.liveConnection.on('chat', (commentTiktok: CommentTiktok) => {
            console.log(`Comentario: ${commentTiktok.comment}`);
            translateCommentToAction(commentTiktok.comment);
        })
    }

}

export default TikTokLiveService;
