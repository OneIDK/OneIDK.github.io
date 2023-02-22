'''
Nota: este archivo va a ser menos eficaz que main y probablemente tendrá más texto, pero es porque me adelanto a hacer las cosas y como obvio no conozco todas las herramientas ni tengo la perspicacia del profesor va a haber cosas que se puedan hacer más fácil y aquí no estarán.
'''
import random

# tuples
computer_options = ('Rock🪨', 'Paper📄', 'Scissors✂️')
options = ('Rock', 'Paper', 'Scissors')

while True:
  # vars
  user_option1 = input("Rock, Paper or Scissors: ")
  user_option = user_option1.capitalize()
  computer_option = random.choice(computer_options)
  round = 1
  if not user_option in options:
    print("Select a valid parameter")
    continue
  
  print("Round", round)

  # choices
  if user_option == "Rock":
    print(f"User has selected {user_option}🪨")
    print(f"Computer has selected {computer_option}")
  elif user_option == "Paper":
    print(f"User has selected {user_option}📄")
    print(f"Computer has selected {computer_option}")
  elif user_option == 'Scissors':
    print(f"User has selected {user_option}✂️")
    print(f"Computer has selected {computer_option}")

  # results
  if user_option == 'Rock' and computer_option == 'Rock🪨':
    print('Tie!🪨')
  elif user_option == 'Rock' and computer_option == 'Paper📄':
    print("Computer Wins!😭")
  elif user_option == 'Rock' and computer_option == 'Scissors✂️':
    print("User Wins!😁")
  elif user_option == 'Scissors' and computer_option == 'Rock🪨':
    print("Computer Wins!😭")
  elif user_option == 'Scissors' and computer_option == 'Paper📄':
    print("User Wins!😁")
  elif user_option == 'Scissors' and computer_option == 'Scissors✂️':
    print("Tie!✂️")
  elif user_option == 'Paper' and computer_option == 'Rock🪨':
    print("User Wins!😁")
  elif user_option == 'Paper' and computer_option == 'Paper📄':
    print("Tie!📄")
  elif user_option == 'Paper' and computer_option == 'Scissors✂️':
    print("Computer Wins!😭")

  # score
  
  break


"""
Otro modo de hacer los tie's:
if user_option == computer_option:
  print('Tie!')

De esta forma me ahorro trabajo, aunque ya les puse hasta emoticones entonces ya qué
"""