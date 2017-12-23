import * as earth from '../../assets/images/textures/tiles/earth.png';
import * as soil from '../../assets/images/textures/tiles/soil.png';
import TextureMap from '../interfaces/TextureMap';

const tileTextures: TextureMap[] = [
    {
        name: 'tile_earth',
        url: earth
    },
    {
        name: 'tile_soil',
        url: soil
    }
];

export default tileTextures;
