import { useState, useEffect } from 'react'

function Test() {
  const [backendStatus, setBackendStatus] = useState('checking...')
  const [backendUrl, setBackendUrl] = useState('')
  const [databaseStatus, setDatabaseStatus] = useState(null)

  useEffect(() => {
    checkBackendConnection()
  }, [])

  const checkBackendConnection = async () => {
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      setBackendUrl(baseUrl)

      const response = await fetch(`${baseUrl}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (response.ok) {
        const data = await response.json()
        setBackendStatus(`Connected - ${data.message || 'OK'}`)
        await checkDatabaseConnection(baseUrl)
      } else {
        setBackendStatus(`Failed - ${response.status} ${response.statusText}`)
        setDatabaseStatus({ error: 'Backend not accessible' })
      }
    } catch (error) {
      setBackendStatus(`Error - ${error.message}`)
      setDatabaseStatus({ error: 'Backend not accessible' })
    }
  }

  const checkDatabaseConnection = async (baseUrl) => {
    try {
      const response = await fetch(`${baseUrl}/test`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (response.ok) {
        const dbData = await response.json()
        setDatabaseStatus(dbData)
      } else {
        setDatabaseStatus({ error: `Failed to check database - ${response.status}` })
      }
    } catch (error) {
      setDatabaseStatus({ error: `Database check failed - ${error.message}` })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EFF6FF] to-white p-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow">
        <h1 className="text-2xl font-bold text-[#1E3A8A] mb-6">Backend & Database Test</h1>

        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-slate-700 mb-1">Backend URL:</h3>
            <p className="text-sm text-slate-600 break-all bg-slate-100 p-2 rounded">
              {backendUrl || 'Detecting...'}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-700 mb-1">Backend Status:</h3>
            <p className="text-sm font-mono bg-slate-100 p-2 rounded">
              {backendStatus}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-700 mb-1">Database Status:</h3>
            <div className="text-sm bg-slate-100 p-3 rounded">
              {databaseStatus ? (
                databaseStatus.error ? (
                  <p className="text-red-600 font-mono">{databaseStatus.error}</p>
                ) : (
                  <div className="space-y-2">
                    <p><span className="font-semibold">Backend:</span> {databaseStatus.backend}</p>
                    <p><span className="font-semibold">Database:</span> {databaseStatus.database}</p>
                    <p><span className="font-semibold">DB URL:</span> {databaseStatus.database_url}</p>
                    <p><span className="font-semibold">DB Name:</span> {databaseStatus.database_name}</p>
                    <p><span className="font-semibold">Connection:</span> {databaseStatus.connection_status}</p>
                    {databaseStatus.collections && databaseStatus.collections.length > 0 && (
                      <p><span className="font-semibold">Collections:</span> {databaseStatus.collections.join(', ')}</p>
                    )}
                  </div>
                )
              ) : (
                <p className="text-slate-500 font-mono">Checking database...</p>
              )}
            </div>
          </div>

          <button
            onClick={checkBackendConnection}
            className="w-full bg-[#1E3A8A] hover:bg-[#0f1f4a] text-white font-semibold py-2 px-4 rounded transition-colors"
          >
            Test Again
          </button>

          <a
            href="/"
            className="block w-full bg-[#F59E0B] hover:brightness-95 text-[#1E3A8A] font-semibold py-2 px-4 rounded text-center transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}

export default Test
