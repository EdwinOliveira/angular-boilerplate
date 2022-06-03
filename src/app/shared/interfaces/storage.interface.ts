import { TokenCollection } from "../constants/collections/token.collection";

export interface IStorage {
    fetchToken<T>(token: TokenCollection): T;
    createToken<T>(token: TokenCollection, data: T): void;
    removeToken(token: TokenCollection): void;
    clear(): void;
}