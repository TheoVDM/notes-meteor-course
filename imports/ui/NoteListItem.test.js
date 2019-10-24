import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import { Meteor } from 'meteor/meteor';

import NoteListItem from './NoteListItem';

if (Meteor.isClient) {
    describe('NoteListItem', function () {
        it('should render title and timestamp', function () {
            const title = 'Test title here';
            const updatedAt = 1571917246833;
            const wrapper = mount( <NoteListItem note={{ title, updatedAt }}/>);

            expect(wrapper.find('h5').text()).toBe(title);
            expect(wrapper.find('p').text()).toBe('24/10/19');
        });

        it('should set default title if no title set', function () {
            const title = '';
            const updatedAt = 1571917246833;
            const wrapper = mount( <NoteListItem note={{ title, updatedAt }}/>);

            expect(wrapper.find('h5').text()).toBe('Untitled note');
        });
    });
}