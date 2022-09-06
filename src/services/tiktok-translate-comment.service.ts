import { getNormalizeWord } from '../utils/normalize-words';
import { doActionKeyBoard } from '../utils/action_keyboard';

export const availableWords =
    ["up", "down", "left", "right", "start", "a", "select", "seleccionar", "confirm", "b",
        "back", "cancel", "cancelar", "arriba", "abajo", "izquierda", "derecha", "confirmar", "atras", "enter"]

const actions = {
    "a": ["a", "select", "confirm", "seleccionar", "confirmar"],
    "b": ["b", "back", "cancel", "cancelar", "atras"],
    "enter": ["start", "enter"],
    "up": ["up", "arriba"],
    "down": ["down", "abajo"],
    "left": ["left", "izquierda"],
    "right": ["derecha", "right"]
}

export const translateCommentToAction = (comment: string): void => {
    let normalizeComment = getNormalizeWord(comment);
    if (!availableWords.includes(normalizeComment)) return;

    const actionsObject = Object.entries(actions);
    for (let index = 0; index < actionsObject.length; index++) {
        if (actionsObject[index][1].includes(normalizeComment)) {
            return doActionKeyBoard(actionsObject[index][0]);
        }
    }
}
