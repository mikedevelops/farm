import * as defaultTile from '../../assets/images/textures/tiles/default.png';
import * as soil from '../../assets/images/textures/tiles/soil.png';
import TextureMap from '../interfaces/TextureMap';

const tileTextures: TextureMap[] = [
    {
        name: 'tile_default',
        url: defaultTile
    },
    {
        name: 'tile_soil',
        url: soil
    }
];

export default tileTextures;
