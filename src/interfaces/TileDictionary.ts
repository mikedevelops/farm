import Tile from '../resources/Tile';

export default interface TileDictionary {
    [index: string]: {
        texture: string;
        entity: any;
    };
}
