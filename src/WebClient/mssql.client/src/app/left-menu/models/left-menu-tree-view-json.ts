import { Schemaenum } from "./schemaenum.enum";

 
export class LeftMenuTreeViewJson {
    text: string
    icon : string;
    mdaIcon : string;
    link: string;
    selected: string;
    badge: string;
    expand: string;
    leaf: string;
    SchemaEnums: Schemaenum;
    children: string[]; 
}
