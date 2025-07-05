Feature: Souscription d'assurance auto
En tant qu'utilisateur
Je veux souscrire une assurance auto
Afin de protéger mon véhicule

Background:
    Given je suis sur la page d'accueil d'assurance auto

  @cookies @accept
  Scenario: Demande de devis avec acceptation des cookies
    Given j'accepte les cookies
    When je clique sur le bouton "Obtenir un devis"
    And je renseigne mes informations personnelles
      | prénom | nom    | email              | téléphone  |
      | Jean   | Dupont | jean@example.com   | 0123456789 |
    And je renseigne les informations du véhicule
      | marque  | modèle | immatriculation | année |
      | Peugeot | 308    | AB-123-CD       | 2020  |
    And je clique sur "Calculer mon devis"
    Then je vois la page de devis
    And le devis contient les informations saisies
    And le montant est affiché

  @cookies @refuse
  Scenario: Demande de devis avec refus des cookies
    Given je refuse les cookies
    When je clique sur le bouton "Obtenir un devis"
    And je renseigne mes informations personnelles
      | prénom | nom    | email              | téléphone  |
      | Marie  | Martin | marie@example.com  | 0987654321 |
    And je renseigne les informations du véhicule
      | marque  | modèle | immatriculation | année |
      | Renault | Clio   | XY-789-ZW       | 2021  |
    And je clique sur "Calculer mon devis"
    Then je vois la page de devis
    And le devis contient les informations saisies
    And le montant est affiché

  @cookies @continue-sans-accepter
  Scenario: Continuer sans accepter les cookies
    Given je clique sur "Continuer sans accepter"
    When je clique sur le bouton "Obtenir un devis"
    And je renseigne mes informations personnelles
      | prénom | nom    | email              | téléphone  |
      | Pierre | Dubois | pierre@example.com | 0555666777 |
    And je renseigne les informations du véhicule
      | marque  | modèle | immatriculation | année |
      | Citroën | C3     | MN-456-PQ       | 2019  |
    And je clique sur "Calculer mon devis"
    Then je vois la page de devis
    And le devis contient les informations saisies
    And le montant est affiché

  @validation @error-handling
  Scenario: Validation des champs obligatoires
    Given j'accepte les cookies
    When je clique sur le bouton "Obtenir un devis"
    And je clique sur "Continuer" sans remplir les champs
    Then je vois les messages d'erreur pour les champs obligatoires
    And les champs en erreur sont surlignés
    And le bouton "Calculer mon devis" est désactivé

  @validation @field-validation
  Scenario: Validation des champs individuels
    Given j'accepte les cookies
    When je clique sur le bouton "Obtenir un devis"
    And je saisis un email invalide "email-invalide"
    And je clique en dehors du champ
    Then je vois le message d'erreur "Email invalide"
    And le champ email est surligné en rouge

  @subscription @complete
  Scenario: Souscription complète avec garanties
    Given j'accepte les cookies
    When je clique sur le bouton "Obtenir un devis"
    And je renseigne toutes les informations obligatoires
    And je sélectionne les garanties "Tous risques"
    And je clique sur "Souscrire maintenant"
    Then je vois la page de confirmation
    And je reçois un numéro de contrat
    And les informations du contrat sont correctes

  @subscription @partial
  Scenario: Souscription avec garanties partielles
    Given j'accepte les cookies
    When je clique sur le bouton "Obtenir un devis"
    And je renseigne toutes les informations obligatoires
    And je sélectionne les garanties "Tiers"
    And je clique sur "Souscrire maintenant"
    Then je vois la page de confirmation
    And je reçois un numéro de contrat
    And le montant de la prime est inférieur à celui des "Tous risques"