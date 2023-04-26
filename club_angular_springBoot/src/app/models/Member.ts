export class Member{
    id !:number;
    name!: string ;
    email!: string ;
    pole !:Pole  ; 
    classe !: Class ;
    birthday !: Date ;
    numberPhone !: number;
}

export enum Class {
    info1 = "info1" , info2 = "info2" , info3 = "info3" ,
    mecat1 = "mecatronique1" , mecat2 ="mecatronique2" , mecat3 = "mecatronique3",
    infot1 ="infotronique1" , infot2 ="infotronique2", infot3 = "infotronique3",
    gsil1 ="gsil1" , gsil2 ="gsil2" , gsil3 = "gsil3",
    master_tic ="m_tic" , master_arti ="m_arti" , master_mpsdm ="m_mpsdm",
}   

export enum Pole {
    projet = "pole_projet",
    dev_comm ="developpement_commercial",
    marketing ="marketing",
    responsable ="responsable",
}