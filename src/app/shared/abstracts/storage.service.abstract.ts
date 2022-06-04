import { TokenCollection } from "../constants/collections/token.collection";
import { IStorageService } from "../interfaces/storage.service.interface";

export abstract class AbstractStorageService implements IStorageService {

    abstract fetchToken<T>(name: TokenCollection): T | null;

    abstract createToken<T>(name: TokenCollection, data: T): void;

    abstract removeToken(name: TokenCollection): void;

    abstract clear(): void;
}