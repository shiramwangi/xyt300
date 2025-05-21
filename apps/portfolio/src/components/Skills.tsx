import { useEffect, useState } from 'react'
import axios from 'axios'

interface Skill {
  id: string
  name: string
  level: number
  category: string
}

export default function Skills() {
  const [skills, setSkills] = useState<Skill[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/skills')
        setSkills(response.data)
      } catch (error) {
        console.error('Error fetching skills:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchSkills()
  }, [])

  if (loading) {
    return <div>Loading skills...</div>
  }

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-secondary mb-8">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold text-secondary mb-2">
              {skill.name}
            </h3>
            <div className="flex items-center mb-2">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-primary h-2.5 rounded-full"
                  style={{ width: `${(skill.level / 10) * 100}%` }}
                ></div>
              </div>
              <span className="ml-2 text-sm text-gray-600">{skill.level}/10</span>
            </div>
            <p className="text-gray-600">{skill.category}</p>
          </div>
        ))}
      </div>
    </section>
  )
} 