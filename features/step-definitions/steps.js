import { Given, When, Then } from '@cucumber/cucumber'
import { Ensure, equals } from '@serenity-js/assertions'

import { TodoList } from '../../serenity/todo-list-app/TodoList.js'

Given('{actor} starts/started with a list containing:', async (actor, table) => {
    await actor.attemptsTo(
        TodoList.createListContaining(itemsFrom(table)),
    )
})

When('{pronoun} marks/marked the following item(s) as completed:', async (actor, table) => {
    await actor.attemptsTo(
        TodoList.markAsCompleted(itemsFrom(table)),
    )
})

When('{pronoun} marks/marked the following item(s) as outstanding:', async (actor, table) => {
    await actor.attemptsTo(
        TodoList.markAsOutstanding(itemsFrom(table)),
    )
})

Then('{pronoun} should see that she has {int} item(s) outstanding', async (actor, expectedCount) => {
    await actor.attemptsTo(
        Ensure.that(TodoList.outstandingItemsCount(), equals(expectedCount)),
    )
})

/**
 * Extracts the data from a single-column Cucumber DataTable and returns it as an `Array<string>`
 *
 * @param table
 */
function itemsFrom(table) {
    return table.raw().map(row => row[0])
}
