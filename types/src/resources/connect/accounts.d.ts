export declare namespace accounts {
    let client: Function;
    function create(params: unknown): Promise<unknown>;
    function retrieve(id: string): Promise<unknown>;
    function update(id: string, params: unknown): Promise<unknown>;
    function del(id: string): Promise<unknown>;
    function reject(id: string, params: unknown): Promise<unknown>;
    function list(params: unknown): Promise<unknown>;
    function createLoginLink(id: string): Promise<unknown>;
}
//# sourceMappingURL=accounts.d.ts.map