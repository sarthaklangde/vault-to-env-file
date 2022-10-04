# Vault To Env File GitHub Action



**Description**: A simple composite Github Action that uses the [Hashicorp Vault Action](https://github.com/hashicorp/vault-action) to download the keys and puts into an .env file

---

A helper action for easily pulling secrets from HashiCorp Vault™.

<!-- TOC -->

  - [Example Usage](#example-usage)
  - [Reference](#reference)

<!-- /TOC -->

## Example Usage

```yaml
jobs:
    build:
        # ...
        steps:
            # ...
            - name: Get Vault secrets and write to .env file
              uses: sarthaklangde/vault-to-env-file-action@1.0.0
              with:
                url: https://vault.mycompany.com:8200
                method: 'jwt'
                role: 'github_action_vault_role'
                secretsPath: secret/data/web/dev
            # ...
```

## Reference

Here are all the inputs available through `with`:

| Input               | Description                                                                                                                                          | Default | Required |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | -------- |
| `url`               | The URL for the vault endpoint  | | Yes                                                                   
| `method`            | The method to use to authenticate with Vault.                                                                                                        | `jwt` |          |
| `role`              | Vault role for specified auth method  | | Yes                                                                                                               |         |          |
| `secretPath`              | Path of the secrets to fetch                                                                                                |         |    Yes      |
| `envFileName`              | Name of the file to write the secrets to                                                                                                |     `.env`    |          |
| `envFilePath`              | Path of env file relative to the root                                                                                                |     `./`    |          |


## Credits

[Hashicorp Vault Action](https://github.com/hashicorp/vault-action) - Uses this action directly in composition

[Subhash-tech](https://github.com/Subhash-tech) - Creating the first draft of the script