'''
Nota: este archivo va a ser menos eficaz que main y probablemente tendrá más texto, pero es porque me adelanto a hacer las cosas y como obvio no conozco todas las herramientas ni tengo la perspicacia del profesor va a haber cosas que se puedan hacer más fácil y aquí no estarán.
'''
import random

# welcome
print("*" * 40)
print('')
print("Welcome to Rock, Paper, Scissors Game!!")
print("")
print("*" * 40)
print("")

# tuples
computer_options = ('Rock🪨', 'Paper📄', 'Scissors✂️')
options = ('Rock', 'Paper', 'Scissors')

# vars
round = 1
user_score = 0
computer_score = 0

while True:
  user_option1 = input("Choose: Rock, Paper or Scissors: ")
  user_option = user_option1.capitalize()
  computer_option = random.choice(computer_options)
  if not user_option in options:
    print("")
    print("Please, select a valid parameter")
    print("")
    continue

  print()
  print("     ROUND", round)
  print()

  # choices
  if user_option == "Rock":
    print(f"User has selected: {user_option}🪨")
    print(f"Computer has selected: {computer_option}")
  elif user_option == "Paper":
    print(f"User has selected: {user_option}📄")
    print(f"Computer has selected: {computer_option}")
  elif user_option == 'Scissors':
    print(f"User has selected: {user_option}✂️")
    print(f"Computer has selected: {computer_option}")

  print()
  print("...")
  print()
  # results
  if user_option == 'Rock' and computer_option == 'Rock🪨':
    print('Tie!🪨'.upper())
  elif user_option == 'Rock' and computer_option == 'Paper📄':
    print("Computer Wins!😭".upper())
    computer_score += 1
  elif user_option == 'Rock' and computer_option == 'Scissors✂️':
    print("User Wins!😁".upper())
    user_score += 1
  elif user_option == 'Scissors' and computer_option == 'Rock🪨':
    print("Computer Wins!😭".upper())
    computer_score += 1
  elif user_option == 'Scissors' and computer_option == 'Paper📄':
    print("User Wins!😁".upper())
    user_score += 1
  elif user_option == 'Scissors' and computer_option == 'Scissors✂️':
    print("Tie!✂️".upper())
  elif user_option == 'Paper' and computer_option == 'Rock🪨':
    print("User Wins!😁".upper())
    user_score += 1
  elif user_option == 'Paper' and computer_option == 'Paper📄':
    print("Tie!📄".upper())
  elif user_option == 'Paper' and computer_option == 'Scissors✂️':
    print("Computer Wins!😭".upper())
    computer_score += 1

  round += 1

  # score
  print()
  print('Score: ', "User ", user_score, "- Computer ", computer_score)
  print()
  print()
  
  if user_score == 2:
    print("User has won the game!!!".upper())
    print("🎉🎉🎉")
    break
  if computer_score == 2:
    print("Computer has won the game!!!".upper())
    print("🤖🤖🤖")
    break


"""
Otro modo de hacer los tie's:
if user_option == computer_option:
  print('Tie!')

De esta forma me ahorro trabajo, aunque ya les puse hasta emoticones entonces ya qué
"""