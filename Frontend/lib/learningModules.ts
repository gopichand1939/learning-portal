export type ModuleNodeType = 'study' | 'exercise' | 'assignment' | 'coding'

export interface ModuleNode {
  id: string
  label: string
  type?: ModuleNodeType
  meta?: string
  children?: ModuleNode[]
}

const leafActions = (topicId: string): ModuleNode[] => [
  { id: `${topicId}-study`, label: 'Study Material', type: 'study' },
  { id: `${topicId}-exercise`, label: 'Basic Exercise (10 Questions)', type: 'exercise', meta: '10 Questions' },
  { id: `${topicId}-assignment`, label: 'Assignment (20 MCQs)', type: 'assignment', meta: '20 MCQs' },
]

/** Python: Study Material, Basic Exercise, Coding Practice, Assignment (10 MCQs) */
const pythonLeafActions = (topicId: string): ModuleNode[] => [
  { id: `${topicId}-study`, label: 'Study Material', type: 'study' },
  { id: `${topicId}-exercise`, label: 'Basic Exercise (10 Questions)', type: 'exercise', meta: '10 Questions' },
  { id: `${topicId}-coding`, label: 'Coding Practice (2 Questions – Interview POV)', type: 'coding', meta: '2 Questions' },
  { id: `${topicId}-assignment`, label: 'Assignment (10 MCQs)', type: 'assignment', meta: '10 MCQs' },
]

/** Quantitative Aptitude */
export const aptitudeModule: ModuleNode = {
  id: 'aptitude',
  label: 'Quantitative Aptitude',
  children: [
    {
      id: 'number-systems',
      label: 'Number Systems',
      children: [
        { id: 'numbers', label: 'Numbers', children: leafActions('numbers') },
        { id: 'power-cycles', label: 'Power Cycles', children: leafActions('power-cycles') },
        { id: 'remainder-cycles', label: 'Remainder Cycles', children: leafActions('remainder-cycles') },
        { id: 'company-mcq-ns', label: 'Company Specific MCQs', children: leafActions('company-mcq-ns') },
      ],
    },
    {
      id: 'lcm-hcf',
      label: 'LCM & HCF',
      children: [
        { id: 'lcm-hcf-concepts', label: 'Concepts', children: leafActions('lcm-hcf-concepts') },
        { id: 'lcm-hcf-apps', label: 'Applications', children: leafActions('lcm-hcf-apps') },
      ],
    },
    { id: 'percentages', label: 'Percentages', children: [{ id: 'percentages-basics', label: 'Basics', children: leafActions('percentages-basics') }] },
    { id: 'profit-loss', label: 'Profit & Loss', children: [{ id: 'profit-loss-basics', label: 'Basics', children: leafActions('profit-loss-basics') }] },
    {
      id: 'si-ci',
      label: 'Simple & Compound Interest',
      children: [
        { id: 'si', label: 'SI', children: leafActions('si') },
        { id: 'ci', label: 'CI', children: leafActions('ci') },
      ],
    },
    { id: 'ratios', label: 'Ratios & Proportions', children: [{ id: 'ratios-basics', label: 'Basics', children: leafActions('ratios-basics') }] },
    { id: 'mixtures', label: 'Mixtures & Alligations', children: [{ id: 'mixtures-basics', label: 'Basics', children: leafActions('mixtures-basics') }] },
    { id: 'partnerships', label: 'Partnerships', children: [{ id: 'partnerships-basics', label: 'Basics', children: leafActions('partnerships-basics') }] },
    { id: 'ages', label: 'Ages', children: [{ id: 'ages-basics', label: 'Basics', children: leafActions('ages-basics') }] },
    { id: 'averages', label: 'Averages', children: [{ id: 'averages-basics', label: 'Basics', children: leafActions('averages-basics') }] },
    { id: 'tsd', label: 'Time Speed & Distance', children: [{ id: 'tsd-basics', label: 'Basics', children: leafActions('tsd-basics') }] },
    { id: 'time-work', label: 'Time & Work', children: [{ id: 'time-work-basics', label: 'Basics', children: leafActions('time-work-basics') }] },
    { id: 'perm-comb', label: 'Permutations & Combinations', children: [{ id: 'perm-comb-basics', label: 'Basics', children: leafActions('perm-comb-basics') }] },
    { id: 'probability', label: 'Probability', children: [{ id: 'probability-basics', label: 'Basics', children: leafActions('probability-basics') }] },
    { id: 'aptitude-final', label: 'Final Assessment', children: leafActions('aptitude-final') },
  ],
}

/** Logical Reasoning */
export const reasoningModule: ModuleNode = {
  id: 'reasoning',
  label: 'Logical Reasoning',
  children: [
    {
      id: 'clocks',
      label: 'Clocks',
      children: [
        { id: 'clock-1', label: 'Clock 1', children: leafActions('clock-1') },
        { id: 'clock-2', label: 'Clock 2', children: leafActions('clock-2') },
        { id: 'clock-3', label: 'Clock 3', children: leafActions('clock-3') },
        { id: 'company-mcq-clocks', label: 'Company Specific MCQs', children: leafActions('company-mcq-clocks') },
      ],
    },
    { id: 'calendars', label: 'Calendars', children: [{ id: 'calendars-basics', label: 'Basics', children: leafActions('calendars-basics') }] },
    { id: 'di', label: 'Data Interpretation', children: [{ id: 'di-basics', label: 'Basics', children: leafActions('di-basics') }] },
    { id: 'ranking', label: 'Ranking', children: [{ id: 'ranking-basics', label: 'Basics', children: leafActions('ranking-basics') }] },
    { id: 'directions', label: 'Directions', children: [{ id: 'directions-basics', label: 'Basics', children: leafActions('directions-basics') }] },
    { id: 'coding-decoding', label: 'Coding & Decoding', children: [{ id: 'coding-basics', label: 'Basics', children: leafActions('coding-basics') }] },
    { id: 'data-arrangements', label: 'Data Arrangements', children: [{ id: 'data-arr-basics', label: 'Basics', children: leafActions('data-arr-basics') }] },
    { id: 'blood-relations', label: 'Blood Relations', children: [{ id: 'blood-basics', label: 'Basics', children: leafActions('blood-basics') }] },
    { id: 'venn-diagrams', label: 'Venn Diagrams', children: [{ id: 'venn-basics', label: 'Basics', children: leafActions('venn-basics') }] },
    { id: 'syllogisms', label: 'Syllogisms', children: [{ id: 'syllogisms-basics', label: 'Basics', children: leafActions('syllogisms-basics') }] },
    { id: 'cubes', label: 'Cubes', children: [{ id: 'cubes-basics', label: 'Basics', children: leafActions('cubes-basics') }] },
    { id: 'puzzles', label: 'Puzzles', children: [{ id: 'puzzles-basics', label: 'Basics', children: leafActions('puzzles-basics') }] },
    { id: 'data-sufficiency', label: 'Data Sufficiency', children: [{ id: 'ds-basics', label: 'Basics', children: leafActions('ds-basics') }] },
    { id: 'reasoning-final', label: 'Final Assessment', children: leafActions('reasoning-final') },
  ],
}

/** Verbal Ability */
export const verbalModule: ModuleNode = {
  id: 'verbal',
  label: 'Verbal Ability',
  children: [
    { id: 'rc', label: 'Reading Comprehension', children: [{ id: 'rc-basics', label: 'Basics', children: leafActions('rc-basics') }] },
    { id: 'sentence-correction', label: 'Sentence Correction', children: [{ id: 'sc-basics', label: 'Basics', children: leafActions('sc-basics') }] },
    { id: 'error-spotting', label: 'Error Spotting', children: [{ id: 'error-basics', label: 'Basics', children: leafActions('error-basics') }] },
    { id: 'fill-blanks', label: 'Fill in the Blanks', children: [{ id: 'fill-basics', label: 'Basics', children: leafActions('fill-basics') }] },
    { id: 'para-jumbles', label: 'Para Jumbles', children: [{ id: 'para-basics', label: 'Basics', children: leafActions('para-basics') }] },
    { id: 'synonyms-antonyms', label: 'Synonyms & Antonyms', children: [{ id: 'syn-basics', label: 'Basics', children: leafActions('syn-basics') }] },
    { id: 'vocabulary', label: 'Vocabulary', children: [{ id: 'vocab-basics', label: 'Basics', children: leafActions('vocab-basics') }] },
    { id: 'voice', label: 'Active & Passive Voice', children: [{ id: 'voice-basics', label: 'Basics', children: leafActions('voice-basics') }] },
    { id: 'speech', label: 'Direct & Indirect Speech', children: [{ id: 'speech-basics', label: 'Basics', children: leafActions('speech-basics') }] },
    { id: 'cloze', label: 'Cloze Test', children: [{ id: 'cloze-basics', label: 'Basics', children: leafActions('cloze-basics') }] },
    { id: 'verbal-company-mcq', label: 'Company Specific MCQs', children: leafActions('verbal-company-mcq') },
    { id: 'verbal-final', label: 'Final Assessment', children: leafActions('verbal-final') },
  ],
}

/** Python Programming */
export const pythonModule: ModuleNode = {
  id: 'python',
  label: 'Python Programming',
  children: [
    { id: 'intro-python', label: 'Introduction to Python', children: pythonLeafActions('intro-python') },
    { id: 'io-basics', label: 'I/O Basics', children: pythonLeafActions('io-basics') },
    { id: 'operators-conditionals', label: 'Operators & Conditional Statements', children: pythonLeafActions('operators-conditionals') },
    { id: 'nested-conditions', label: 'Nested Conditions', children: pythonLeafActions('nested-conditions') },
    { id: 'loops', label: 'Loops', children: pythonLeafActions('loops') },
    { id: 'loop-control', label: 'Loop Control Statements', children: pythonLeafActions('loop-control') },
    { id: 'strings-variables', label: 'Strings & Variables', children: pythonLeafActions('strings-variables') },
    { id: 'lists', label: 'Lists', children: pythonLeafActions('lists') },
    { id: 'functions', label: 'Functions', children: pythonLeafActions('functions') },
    { id: 'recursion', label: 'Recursion', children: pythonLeafActions('recursion') },
  ],
}

export const moduleProgressDefault = { aptitude: 10, reasoning: 10, verbal: 10, python: 10 }

/** Find node by id and return it with path (labels from root to node). */
export function findNodeById(
  root: ModuleNode,
  id: string,
  path: string[] = []
): { node: ModuleNode; path: string[] } | null {
  const currentPath = [...path, root.label]
  if (root.id === id) return { node: root, path: currentPath }
  if (root.children) {
    for (const child of root.children) {
      const found = findNodeById(child, id, currentPath)
      if (found) return found
    }
  }
  return null
}

/** Leaf = node with type (study/exercise/assignment). Collect all leaf ids in tree. */
export function getLeafIds(root: ModuleNode): string[] {
  const ids: string[] = []
  function walk(node: ModuleNode) {
    if (node.type && !node.children?.length) ids.push(node.id)
    node.children?.forEach(walk)
  }
  walk(root)
  return ids
}

/** Collect all leaf ids under the given node (including the node itself if it's a leaf). */
export function getLeafIdsUnder(node: ModuleNode): string[] {
  const ids: string[] = []
  function walk(n: ModuleNode) {
    if (n.type && !n.children?.length) ids.push(n.id)
    n.children?.forEach(walk)
  }
  walk(node)
  return ids
}
