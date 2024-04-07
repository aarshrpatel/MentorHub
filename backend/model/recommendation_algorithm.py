# Sample data: List of mentors and a mentee
mentors = [
    {"name": "Mentor A", "interests": ["Python", "Data Science"], "occupation": "Data Scientist"},
    {"name": "Mentor B", "interests": ["JavaScript", "Web Development"], "occupation": "Web Developer"},
    {"name": "Mentor C", "interests": ["Python", "Machine Learning"], "occupation": "Research Scientist"}
]

mentee = {"interests": ["Python", "Machine Learning"], "occupation": "Data Scientist"}

# Function to calculate match score
def calculate_match_score(mentee, mentor):
    score = 0
    # Interest match: 10 points for each shared interest
    shared_interests = set(mentee["interests"]) & set(mentor["interests"])
    score += len(shared_interests) * 10
    
    # Occupation match: 20 points if mentee's desired occupation matches mentor's
    if mentee["occupation"] in mentor["occupation"]:
        score += 20
    
    return score

# Function to find best matching mentors
def find_best_matches(mentee, mentors):
    scores = []
    for mentor in mentors:
        match_score = calculate_match_score(mentee, mentor)
        scores.append((mentor, match_score))
    
    # Sort mentors by score in descending order
    scores.sort(key=lambda x: x[1], reverse=True)
    return scores

# Get matches
matches = find_best_matches(mentee, mentors)

# Display top 3 matches
print("Top matches:")
for match in matches[:3]:
    print(f"{match[0]['name']} with score {match[1]}")
