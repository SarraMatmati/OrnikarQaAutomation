Feature: Validation des formulaires
  En tant qu'utilisateur
  Je veux avoir des validations claires
  Afin de corriger mes erreurs facilement

  Background:
    Given je suis sur la page de devis
    And j'accepte les cookies

  Scenario Outline: Validation des formats d'email
    When je saisis l'email "<email>"
    And je clique en dehors du champ
    Then je vois le message "<message>"

    Examples:
      | email           | message                    |
      | test@email.com  | aucun message              |
      | invalid-email   | Format d'email invalide    |
      | @domain.com     | Format d'email invalide    |
      | test@           | Format d'email invalide    |

  Scenario: Validation du numéro de téléphone
    When je saisis le téléphone "123"
    And je clique en dehors du champ
    Then je vois le message "Numéro de téléphone invalide"

  Scenario: Validation de la plaque d'immatriculation
    When je saisis la plaque "INVALID"
    And je clique en dehors du champ
    Then je vois le message "Format de plaque invalide"