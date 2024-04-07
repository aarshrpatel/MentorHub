from .database_func import read_all_mentor_info, read_all_student_info

# Function to calculate match score
def calculate_match_score(mentee, mentor):
    score = 0
    # Interest match: 10 points for each shared interest
    print(mentee["interests"])
    shared_interests = set(mentee["interests"]) & set(mentor["area"])
    score += len(shared_interests) * 10
    
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

def recommend_mentors(mentees_interests, mentors_list):
    recommended_mentors = find_best_matches(mentees_interests, mentors_list)
    return recommended_mentors

# Get matches
def top_matches(mentee, mentors, n=3):
    scores = find_best_matches(mentee, mentors)
    return scores[:n]

