// Write your code here
import {Chrono} from 'react-chrono'

import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  const renderChronoTimeline = item => {
    if (item.categoryId === 'PROJECT') {
      return <ProjectTimelineCard projectDetails={item} key={item.id} />
    }
    return <CourseTimelineCard courseDetails={item} key={item.id} />
  }

  return (
    <div className="timeline-chrono">
      <h1 className="main-heading">MY JOURNEY OF CCBP 4.0</h1>
      <div className="chrono-section">
        <Chrono
          mode="VERTICAL_ALTERNATING"
          items={timelineItemsList}
          themes={{
            secondary: 'white',
          }}
        >
          {timelineItemsList.map(each => renderChronoTimeline(each))}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
