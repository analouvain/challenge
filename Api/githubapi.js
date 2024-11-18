// githubApi.js
const https = require('https'); // Módulo nativo para fazer chamadas HTTPS
const logger = require('./logger'); // Importa o logger
const config = require('./config'); // Importa as configurações

class githubapi {
    // Método para obter informações sobre um usuário
    static async getUser(username) {
        const url = `${config.GITHUB_ENDPOINT}/users/${username}`;
        try {
            const response = await fetch(url, { headers: { 'User-Agent': config.USER_AGENT } });

            if (!response.ok) {
                logger.error(`Error fetching user: ${response.status}`); // Loga erro
                throw new Error(`User not found: ${username}`); // Lança erro se a resposta não for OK
            }

            const userData = await response.json(); // Converte a resposta em JSON
            return userData; // Retorna os dados do usuário
        } catch (error) {
            logger.error(`Network error: ${error.message}`); // Loga erro de rede
            throw new Error('Network Error'); // Lança erro em caso de falha
        }
    }

    // Método para obter repositórios de um usuário
    static async getUserRepos(username, language) {
        const url = `${config.GITHUB_ENDPOINT}/users/${username}/repos`;
        try {
            const response = await fetch(url, { headers: { 'User-Agent': config.USER_AGENT } });
            const repos = await response.json();

            // Filtrando pelos repositórios na linguagem especificada
            const filteredRepos = repos.filter(repo => repo.language && repo.language.toLowerCase() === language.toLowerCase());

            if (!response.ok) {
                logger.error(`Error fetching repos: ${response.status}`); // Loga erro
                throw new Error(`Repos not found for user: ${username}`); // Lança erro se não for encontrado
            }
            
            return filteredRepos; // Retorna os dados dos repositórios
        } catch (error) {
            logger.error(`Network error: ${error.message}`); // Loga erro de rede
            throw new Error('Network Error'); // Lança erro em caso de falha
        }
    }
}

module.exports = githubapi; // Exporta a classe GitHubApi
