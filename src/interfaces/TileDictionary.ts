import Tile from '../resources/Tile';
import TileConfig from './TileConfig';

export default interface TileDictionary {
    [index: string]: {
        texture: string;
        entity: any;
        config: TileConfig;
    };
}
