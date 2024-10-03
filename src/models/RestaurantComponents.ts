class RestaurantComponents {
  assessment: string
  assessmentimg: string
  description: string
  image: string
  name: string
  infos: string[]
  id: number

  constructor(
    id: number,
    assessment: string,
    assessmentimg: string,
    description: string,
    image: string,
    name: string,
    infos: string[]
  ) {
    this.id = id
    this.assessment = assessment
    this.assessmentimg = assessmentimg
    this.description = description
    this.image = image
    this.name = name
    this.infos = infos
  }
}

export default RestaurantComponents
