import { aptitudeDay1Content } from './day1'
import { aptitudeDay2Content } from './day2'
import { aptitudeDay3Content } from './day3'
import { aptitudeDay4Content } from './day4'
import type { AptitudeDayContent } from './types'

export const aptitudeDailyContent: Record<number, AptitudeDayContent> = {
  1: aptitudeDay1Content,
  2: aptitudeDay2Content,
  3: aptitudeDay3Content,
  4: aptitudeDay4Content,
}
