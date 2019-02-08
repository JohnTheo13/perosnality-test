# DATA MODEL
TestSession
- id: UUID
- testId: test.id
- state: 'not-started' | 'started' | 'finished'
- 'answers': [answer.id]

Test
- id: UUID
- name: string
- description: string
- type: 'short' | 'long'
- 'steps': [step.id]

Step
- id: UUID
- type: string
- testId: test.id
- text: number

Answer
- id: UUID
- testSessionId: testSessionid
- stepId: stepid
- data: Object<any>

Role
- id: UUID
- translationKey: string
- roleId: unmber enum(1-8)
- icon: string
- descriptionStrong: string
- descriptionPit: string
- stepId: stepid
- 'words': [word.id]

RoleWord
- id: UUID
- name: string
- translationKey: string
- roleId: number enum(1-8)
- stepId: step.id

# REQUESTS

Get the list of all tests
=========================
GET /tests

-- RESPONSE --
[{
    id: 1,
    name: 'Short personality test',
    description: 'This is my cool test',
      :
      :
}, ...]


Get a single test info
======================
GET /tests/{test-id}

-- RESPONSE --
{
    id: 1,
    name: 'Short personality test',
    description: 'This is my cool test',
    type: 'short',
    status: 'not-started',
      :
      :
}

Start new test session
======================
POST /tests/{test-id}/sessions

-- RESPONSE for short test --
{

}

-- RESPONSE for long test --
{
    TBD
}

Resume existing test session
============================
POST /tests/{test-id}/sessions/{session-id}

-- RESPONSE for short test --
{

}

-- RESPONSE for long test --
{

}

Save answer for a step
======================
POST /answer/{session-id}

-- BODY --
{
    data: {
        // unstructured data
        mostRepresentativeTypes: [45, 46, 48, 50] // role-id
    }
}

-- RESPONSE --

// empty response


Get result for a test session
=============================
GET /result/{session-id}

-- HEADERS --
Accept: text/html | application/json | application/pdf

-- RESPONSE for json --
{
    TBD
}
