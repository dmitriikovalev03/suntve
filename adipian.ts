// Assuming we have an interface to define the structure of an Occupation
interface Occupation {
  id: number;
  title: string;
  description: string;
}

// Mock database of occupations
const occupations: Occupation[] = [
  { id: 1, title: 'Software Developer', description: 'Develops software applications.' },
  { id: 2, title: 'Teacher', description: 'Educates students in a variety of subjects.' },
  // ... other occupations
];

// Function to get a random occupation
async function getOccupation(): Promise<Occupation> {
  try {
    // Simulate fetching an occupation from a database
    const randomIndex = Math.floor(Math.random() * occupations.length);
    const occupation = occupations[randomIndex];
    return occupation;
  } catch (error) {
    // Error handling
    console.error('Failed to get occupation:', error);
    throw new Error('Error fetching occupation');
  }
}

// Example usage
getOccupation().then(occupation => console.log(occupation)).catch(error => console.error(error));
