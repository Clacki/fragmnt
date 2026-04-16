import { useState } from "react"

import {
  CollectionSection,
  HistorySection,
  ReviewSection,
} from "@/features/my-page/pages/sections"
import Tab, { type TabKey } from "./tab/Tab"

export default function TabSection() {
  const [activeTab, setActiveTab] = useState<TabKey>("collection")

  return (
    <section className="mt-2xl">
      <div className="flex flex-col justify-center items-center">
        <Tab activeTab={activeTab} onChange={setActiveTab} />
      </div>

      <div className="mt-xl">
        {activeTab === "collection" && <CollectionSection />}
        {activeTab === "history" && <HistorySection />}
        {activeTab === "review" && <ReviewSection />}
      </div>
    </section>
  )
}
