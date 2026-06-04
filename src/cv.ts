import type { CV } from "./cv-types"
import cvJson from "../cv.json"

const cv = cvJson as unknown as CV

export const basics: CV["basics"] = cv.basics
export const work: CV["work"] = cv.work
export const volunteer: CV["volunteer"] = cv.volunteer
export const education: CV["education"] = cv.education
export const awards: CV["awards"] = cv.awards
export const certificates: CV["certificates"] = cv.certificates
export const publications: CV["publications"] = cv.publications
export const skills: CV["skills"] = cv.skills
export const languages: CV["languages"] = cv.languages
export const interests: CV["interests"] = cv.interests
export const references: CV["references"] = cv.references
export const projects: CV["projects"] = cv.projects
