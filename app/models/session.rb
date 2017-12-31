# == Schema Information
#
# Table name: sessions
#
#  id            :integer          not null, primary key
#  session_token :string           not null
#  user_id       :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Session < ApplicationRecord
  validates :session_token, :user_id, presence: true

  belongs_to :user
  # after_initialize :ensure_session_token

  private

  # def ensure_session_token
  #   self.session_token ||= SecureRandom.urlsafe_base64
  # end
end
