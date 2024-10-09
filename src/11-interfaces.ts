export interface Driver {
    database: string;
    passeord: string;
    port: number;

    connect(): void;
    disconnect(): void;
    isConnected(name: string): boolean;
}

class PostgresDriver implements Driver {
    constructor(
        public database: string,
        public passeord: string,
        public port: number
    ){}

    connect(): void {
        console.log('Connecting to Postgres...');
    }

    disconnect(): void {
        console.log('Disconnecting from Postgres...');
    }

    isConnected(name: string): boolean {
        return true;
    }
}

class OracleDriver implements Driver {
    constructor(
        public database: string,
        public passeord: string,
        public port: number
    ){}

    connect(): void {
        console.log('Connecting to Oracle...');
    }

    disconnect(): void {
        console.log('Disconnecting from Oracle...');
    }

    isConnected(name: string): boolean {
        return false;
    }
}