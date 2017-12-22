import TileFactory from '../factories/TileFactory';
import EntityDictionary from '../interfaces/EntityDictionary';
import TimeService from './TimeService';

// TODO
// - Spawners should be genric, as should factories

export default class SpawnerService {
    private entityDictionary: EntityDictionary;

    constructor (
        private timeService: TimeService,
        private tileFactory: TileFactory
    ) {
        this.entityDictionary = {
            soil: {
                factory: this.tileFactory
                    .create.bind(this.tileFactory)
            }
        };
    }

    /**
     * Invoke entity factory functions to return instances on demmand
     */
    public spawn (
        type: string,
        args: any[]
    ) {
        if (this.entityDictionary[type] === undefined) {
            throw new Error(`Could not find entity "${type}"`);
        }

        return this.entityDictionary[type].factory(...args);
    }
}
