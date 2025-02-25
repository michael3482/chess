/**
 * @typedef {Object} Position
 * @property {number} x
 * @property {number} y
 */

/**
 * Класс, представляющий шахматную доску и управляющий состоянием игры
 */
export class ChessBoard {
    /**
     * Создает новую шахматную доску и расставляет фигуры
     */
    constructor() {}

    /**
     * Преобразует строковую позицию (например, 'e4') в координаты
     * @param {string} position Позиция в шахматной нотации
     * @returns {Position} Объект с координатами
     */
    #convertPosition(position) {}

    /**
     * Проверяет валидность позиции на доске
     * @param {Position} position Позиция для проверки
     * @returns {boolean} true, если позиция находится в пределах доски
     */
    isValidPosition(position) {}

    /**
     * Возвращает фигуру на указанной позиции
     * @param {string} position Позиция на доске
     * @returns {*} Объект фигуры или null, если клетка пуста
     */
    getPieceAt(position) {}

    /**
     * Обновляет состояние доски после хода
     * @param {string} from Начальная позиция
     * @param {string} to Конечная позиция
     */
    updateBoard(from, to) {}
}
