import { TokenCollection } from "../constants/collections/token.collection";

export interface IStorage {
    fetchToken<T>(name: TokenCollection): T | null;
    createToken<T>(name: TokenCollection, data: T): void;
    removeToken(name: TokenCollection): void;
    clear(): void;
}