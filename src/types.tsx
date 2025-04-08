export interface HeaderProps {
    name: string;
}
export interface CoursePartBase {
    name: string;
    exerciseCount: number;
}

export interface CoursePartBasic extends CoursePartBase {
    kind: "basic"
}

export interface CoursePartGroup extends CoursePartBase {
    groupProjectCount: number;
    kind: "group"
}

export interface CoursePartBackground extends CoursePartBase {
    
    backgroundMaterial: string;
    kind: "background"
}
export interface CoursePartDescription extends CoursePartBase{
    description:string;
}
export interface CoursePartSpecial extends CoursePartDescription {
    requirements:Array<string>;
    kind:"special"
}
export type CoursePart = CoursePartBasic | CoursePartGroup | CoursePartBackground | CoursePartDescription | CoursePartSpecial;
