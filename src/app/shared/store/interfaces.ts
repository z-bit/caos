export  class IFirma {
    apiUrl: string;         // passt sonst nirgends
    name: string;           // name der firma
    fa: string;             // 20
    fi: string;             // 01
    fils: string[];         // ['01', '02', '03', '04', '05'] alle filialen der firma
    client: string;         // maschine, an der der user grade sitzt
}

export interface IUser {
    error: string;          // Fehlermeldung
    pnr: string;            // '1152'
    bkz: string;            // 'SGZ'
    name: string;           // 'Zoppelt, G\u00fcnther'
    abt: string;            // 'EDV'
    art: string;            // '1'
    pgr: string;            // '182'
    austritt: string;       // '' oder '01-01-2016'
    berechtigung: string;   // 'NO' oder 'IT', 'SB', 'BH', 'VK'
    token: number;          // 33
}

export interface IPerson {
    anredecode: string;
    anrede: string;
    name: string;
    vorname: string;
    strasse: string;
    plz: string;
    ort: string;
    telp: string;
    telg: string;
    handy: string;
    email: string;
}

export interface IAuftrag {
    kunde: IPerson,
    rechnung: IPerson,
    fahrzeug :{
        fin: string;
        kennz: string;
        typ: string;
        motor: string;
        getriebe: string;
    },
    auftrag: {
        fa: string;         // ? doppelt
        fi: string;
        auf: string;
        fg: string;
        job: string;        // aktiver job
        jobs: string[];
        art: string;        // auftragsart
    }
}