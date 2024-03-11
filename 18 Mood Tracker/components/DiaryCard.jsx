import React from "react"
import { nanoid } from "nanoid"

export default function DiaryCard({ data }) {
  const emotionElements = getElements(data.emotions)
  const activityElements = getElements(data.activities)

  function getElements(data) {
    return data.map((item) => {
      return (
        <div key={nanoid()} className="icon-and-text-container">
          <div className="icon">{item.icon}</div>
          <div className="text-for-icon">{item.text}</div>
        </div>
      )
    })
  }

  function getClasses() {
    const num = data.rating

    switch (true) {
      case num <= 30:
        return "red"
        break
      case num > 30 && num <= 50:
        return "yellow"
        break
      case num > 50 && num <= 80:
        return "blue"
        break
      case num > 80:
        return "green"
        break
    }
  }

  return (
    <div className="diary-card">
      <div className="date-container">
        <p>{data.date}</p>
      </div>
      <div className="rating-container">
        <div className="rating-outline">
          <p>
            <span className="bold">Rating:</span> {data.rating}
            <span className="percent">%</span>
          </p>
          <div
            className={`rating-fill ${getClasses()}`}
            style={{ width: `${data.rating}%` }}></div>
        </div>
      </div>
      <div className="emotion-and-activity-overall-container">
        <div className="emotion-container">
          <h3 className="container-title">Emotions</h3>
          <div className="list-of-elements-container">{emotionElements}</div>
        </div>
        <div className="activity-container">
          <h3 className="container-title">Activities</h3>
          <div className="list-of-elements-container">{activityElements}</div>
        </div>
      </div>
      <div className="notes-container">
        <h3>Notes</h3>
        <p>{data.note}</p>
      </div>
    </div>
  )
}
