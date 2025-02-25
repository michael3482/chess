/**
 * @enum {string}
 */
export const PieceColor = {
    WHITE: "white",
    BLACK: "black",
};

/**
 * Класс, представляющий шахматную фигуру
 */
export class ChessPiece {
    /**
     * Создает экземпляр шахматной фигуры
     * @param {PieceColor} color Цвет фигуры
     * @param {string} position Текущая позиция на доске в формате 'a1', 'e4' и т.д.
     */
    constructor(color, position) {}

    /**
     * Проверяет возможность хода фигуры на указанную позицию
     * @param {string} newPosition Новая позиция для хода
     * @returns {boolean} true, если ход возможен, false - если нет
     */
    canMove(newPosition) {}
}

/**
 * Основной класс игры, управляющий игровым процессом
 */
export class ChessGame {
    /**
     * Инициализирует новую игру
     * @param {PieceColor} [firstPlayerColor=PieceColor.WHITE] Цвет фигур первого игрока
     */
    constructor(firstPlayerColor = PieceColor.WHITE) {}

    /**
     * Выполняет ход фигурой
     * @param {string} from Начальная позиция
     * @param {string} to Конечная позиция
     * @returns {boolean} true, если ход успешен, false - если ход невозможен
     */
    makeMove(from, to) {}

    /**
     * Проверяет, находится ли король под шахом
     * @param {PieceColor} color Цвет короля для проверки
     * @returns {boolean} true, если король под шахом
     */
    isCheck(color) {}

    /**
     * Отменяет последний ход
     * @returns {boolean} true, если отмена хода успешна
     */
    undoLastMove() {}
}
